import os
import shutil
import tkinter as tk
from tkinter import filedialog, messagebox

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

def browse_path():
    selected_path = filedialog.askdirectory()
    if selected_path:
        path_entry.delete(0, tk.END)
        path_entry.insert(0, selected_path)

def display_output(message):
    output_text.config(state=tk.NORMAL)
    output_text.insert(tk.END, message + '\n')
    output_text.config(state=tk.DISABLED)

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

def on_open_path():
    path = filedialog.askopenfilename(title="Select file or folder to open")
    if path:
        open_path(path)

# GUI Setup
root = tk.Tk()
root.title("File Manager Tool")

frame = tk.Frame(root)
frame.pack(pady=10, padx=10)

path_label = tk.Label(frame, text="Directory Path:")
path_label.grid(row=0, column=0, padx=5, pady=5)

path_entry = tk.Entry(frame, width=50)
path_entry.grid(row=0, column=1, padx=5, pady=5)

browse_button = tk.Button(frame, text="Browse", command=browse_path)
browse_button.grid(row=0, column=2, padx=5, pady=5)

list_button = tk.Button(frame, text="List Contents", command=on_list_contents)
list_button.grid(row=1, column=0, padx=5, pady=5)

create_button = tk.Button(frame, text="Create File", command=on_create_file)
create_button.grid(row=1, column=1, padx=5, pady=5)

delete_button = tk.Button(frame, text="Delete File", command=on_delete_file)
delete_button.grid(row=1, column=2, padx=5, pady=5)

rename_button = tk.Button(frame, text="Rename File", command=on_rename_file)
rename_button.grid(row=2, column=0, padx=5, pady=5)

move_button = tk.Button(frame, text="Move File", command=on_move_file)
move_button.grid(row=2, column=1, padx=5, pady=5)

open_button = tk.Button(frame, text="Open File/Folder", command=on_open_path)
open_button.grid(row=2, column=2, padx=5, pady=5)

output_text = tk.Text(root, height=15, width=70, state=tk.DISABLED)
output_text.pack(pady=10)

root.mainloop()
