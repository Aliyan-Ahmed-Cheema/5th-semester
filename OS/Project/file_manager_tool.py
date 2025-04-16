import os
import shutil
import tkinter as tk
from tkinter import filedialog, messagebox

def list_contents():
    path = filedialog.askdirectory(title="Select Directory")
    if not path:
        return

    try:
        contents_text.delete('1.0', tk.END)
        contents_text.insert(tk.END, f"Contents of {path}:\n")
        for entry in os.listdir(path):
            entry_path = os.path.join(path, entry)
            if os.path.isfile(entry_path):
                contents_text.insert(tk.END, f"File: {entry}\n")
            elif os.path.isdir(entry_path):
                contents_text.insert(tk.END, f"Directory: {entry}\n")
    except PermissionError:
        messagebox.showerror("Access Denied", "You do not have permission to access this directory.")

def create_file():
    file_path = filedialog.asksaveasfilename(title="Create File")
    if not file_path:
        return

    try:
        with open(file_path, 'w') as f:
            f.write('')
        messagebox.showinfo("Success", f"File '{file_path}' created successfully.")
    except PermissionError:
        messagebox.showerror("Access Denied", "You do not have permission to create this file.")

def delete_file():
    file_path = filedialog.askopenfilename(title="Select File to Delete")
    if not file_path:
        return

    try:
        os.remove(file_path)
        messagebox.showinfo("Success", f"File '{file_path}' deleted successfully.")
    except FileNotFoundError:
        messagebox.showerror("Error", "File not found.")
    except PermissionError:
        messagebox.showerror("Access Denied", "You do not have permission to delete this file.")

def rename_file():
    old_file = filedialog.askopenfilename(title="Select File to Rename")
    if not old_file:
        return

    new_file = filedialog.asksaveasfilename(title="Save As")
    if not new_file:
        return

    try:
        os.rename(old_file, new_file)
        messagebox.showinfo("Success", f"Renamed '{old_file}' to '{new_file}'.")
    except FileNotFoundError:
        messagebox.showerror("Error", "File or directory not found.")
    except PermissionError:
        messagebox.showerror("Access Denied", "You do not have permission to rename this file.")

def organize_files():
    path = filedialog.askdirectory(title="Select Directory to Organize")
    if not path:
        return

    extensions = {
        'Images': ['.jpg', '.jpeg', '.png', '.gif'],
        'Documents': ['.pdf', '.docx', '.txt'],
        'Videos': ['.mp4', '.mkv'],
        'Archives': ['.zip', '.rar'],
    }

    try:
        for entry in os.listdir(path):
            entry_path = os.path.join(path, entry)
            if os.path.isfile(entry_path):
                ext = os.path.splitext(entry)[1].lower()
                for folder, ext_list in extensions.items():
                    if ext in ext_list:
                        folder_path = os.path.join(path, folder)
                        os.makedirs(folder_path, exist_ok=True)
                        shutil.move(entry_path, folder_path)
                        break
        messagebox.showinfo("Success", f"Files in '{path}' organized successfully.")
    except PermissionError:
        messagebox.showerror("Access Denied", "You do not have permission to organize this directory.")

def check_disk_space():
    path = filedialog.askdirectory(title="Select Directory to Check Disk Space")
    if not path:
        return

    try:
        total, used, free = shutil.disk_usage(path)
        contents_text.delete('1.0', tk.END)
        contents_text.insert(tk.END, f"Disk Usage for {path}:\n")
        contents_text.insert(tk.END, f"Total: {total // (1024**3)} GB\n")
        contents_text.insert(tk.END, f"Used: {used // (1024**3)} GB\n")
        contents_text.insert(tk.END, f"Free: {free // (1024**3)} GB\n")
    except PermissionError:
        messagebox.showerror("Access Denied", "You do not have permission to access disk usage information for this path.")

# GUI Setup
root = tk.Tk()
root.title("File Manager Tool")
root.geometry("600x400")

frame = tk.Frame(root)
frame.pack(pady=10)

contents_text = tk.Text(root, height=15, width=70)
contents_text.pack(pady=10)

# Buttons
tk.Button(frame, text="List Directory Contents", command=list_contents).grid(row=0, column=0, padx=5, pady=5)
tk.Button(frame, text="Create File", command=create_file).grid(row=0, column=1, padx=5, pady=5)
tk.Button(frame, text="Delete File", command=delete_file).grid(row=0, column=2, padx=5, pady=5)
tk.Button(frame, text="Rename File", command=rename_file).grid(row=1, column=0, padx=5, pady=5)
tk.Button(frame, text="Organize Files", command=organize_files).grid(row=1, column=1, padx=5, pady=5)
tk.Button(frame, text="Check Disk Space", command=check_disk_space).grid(row=1, column=2, padx=5, pady=5)

root.mainloop()
