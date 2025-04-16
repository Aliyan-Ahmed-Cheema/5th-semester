import os
import shutil
import tkinter as tk
from tkinter import filedialog, messagebox

# Functions for file management and additional features
def list_contents(path):
    try:
        contents = os.listdir(path)
        display_output(f"Contents of {path}:\n" + "\n".join(contents))
    except Exception as e:
        display_output(f"Error listing contents: {e}")

def create_file(file_path):
    try:
        with open(file_path, 'w') as f:
            f.write('')
        display_output(f"File '{file_path}' created successfully.")
    except Exception as e:
        display_output(f"Error creating file: {e}")

def delete_file(file_path):
    try:
        os.remove(file_path)
        display_output(f"File '{file_path}' deleted successfully.")
    except FileNotFoundError:
        display_output("Error: File not found.")
    except PermissionError:
        display_output("Error: Access denied. Cannot delete file.")

def rename_file(old_name, new_name):
    try:
        os.rename(old_name, new_name)
        display_output(f"Renamed '{old_name}' to '{new_name}'.")
    except FileNotFoundError:
        display_output("Error: File or directory not found.")
    except PermissionError:
        display_output("Error: Access denied. Cannot rename file or directory.")

def move_file(source, destination):
    try:
        shutil.move(source, destination)
        display_output(f"Moved '{source}' to '{destination}'.")
    except FileNotFoundError:
        display_output("Error: File or directory not found.")
    except PermissionError:
        display_output("Error: Access denied. Cannot move file or directory.")

def organize_files(path):
    try:
        extensions = {
            'Images': ['.jpg', '.jpeg', '.png', '.gif'],
            'Documents': ['.pdf', '.docx', '.txt'],
            'Videos': ['.mp4', '.mkv'],
            'Archives': ['.zip', '.rar'],
        }

        for entry in os.listdir(path):
            entry_path = os.path.join(path, entry)
            if os.path.isfile(entry_path):
                ext = os.path.splitext(entry)[1].lower()
                for folder, ext_list in extensions.items():
                    if ext in ext_list:
                        folder_path = os.path.join(path, folder)
                        os.makedirs(folder_path, exist_ok=True)
                        shutil.move(entry_path, folder_path)
                        display_output(f"Moved '{entry}' to '{folder_path}'")
                        break
    except Exception as e:
        display_output(f"Error organizing files: {e}")

def check_disk_space(path):
    try:
        total, used, free = shutil.disk_usage(path)
        display_output(f"Disk Space for {path}:\n"
                       f"Total: {total // (1024**3)} GB\n"
                       f"Used: {used // (1024**3)} GB\n"
                       f"Free: {free // (1024**3)} GB")
    except Exception as e:
        display_output(f"Error checking disk space: {e}")

def open_path(path):
    try:
        if os.path.isfile(path):
            os.startfile(path)
            display_output(f"Opened file: {path}")
        elif os.path.isdir(path):
            os.startfile(path)
            display_output(f"Opened folder: {path}")
        else:
            display_output("Error: Path is neither a file nor a folder.")
    except Exception as e:
        display_output(f"Error opening path: {e}")

# Utility functions
def display_output(message):
    output_text.config(state=tk.NORMAL)
    output_text.insert(tk.END, message + '\n')
    output_text.config(state=tk.DISABLED)

# Button action handlers
def on_list_contents():
    path = path_entry.get()
    if path:
        list_contents(path)
    else:
        display_output("Please select a directory.")

def on_create_file():
    path = filedialog.asksaveasfilename()
    if path:
        create_file(path)

def on_delete_file():
    path = filedialog.askopenfilename()
    if path:
        delete_file(path)

def on_rename_file():
    old_name = filedialog.askopenfilename(title="Select file to rename")
    if old_name:
        new_name = filedialog.asksaveasfilename(title="Enter new file name")
        if new_name:
            rename_file(old_name, new_name)

def on_move_file():
    source = filedialog.askopenfilename(title="Select file to move")
    if source:
        destination = filedialog.askdirectory(title="Select destination directory")
        if destination:
            move_file(source, destination)

def on_organize_files():
    path = filedialog.askdirectory(title="Select directory to organize")
    if path:
        organize_files(path)

def on_check_disk_space():
    path = filedialog.askdirectory(title="Select directory to check disk space")
    if path:
        check_disk_space(path)

def on_open_path():
    path = filedialog.askopenfilename(title="Select file or folder to open")
    if path:
        open_path(path)

# GUI setup
root = tk.Tk()
root.title("File Manager Tool")

frame = tk.Frame(root)
frame.pack(pady=10, padx=10)

path_label = tk.Label(frame, text="Directory Path:")
path_label.grid(row=0, column=0, padx=5, pady=5)

path_entry = tk.Entry(frame, width=50)
path_entry.grid(row=0, column=1, padx=5, pady=5)

browse_button = tk.Button(frame, text="Browse", command=lambda: path_entry.insert(0, filedialog.askdirectory()))
browse_button.grid(row=0, column=2, padx=5, pady=5)

buttons = [
    ("List Contents", on_list_contents),
    ("Create File", on_create_file),
    ("Delete File", on_delete_file),
    ("Rename File", on_rename_file),
    ("Move File", on_move_file),
    ("Organize Files", on_organize_files),
    ("Check Disk Space", on_check_disk_space),
    ("Open File/Folder", on_open_path),
]

for i, (text, cmd) in enumerate(buttons):
    btn = tk.Button(frame, text=text, command=cmd)
    btn.grid(row=1 + i // 3, column=i % 3, padx=5, pady=5)

output_text = tk.Text(root, height=15, width=70, state=tk.DISABLED)
output_text.pack(pady=10)

root.mainloop()
