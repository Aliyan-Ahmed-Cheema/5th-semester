import threading
import time
import random
from tkinter import Tk, Canvas, Button, Label, messagebox
import queue  # Use the correct Queue from the queue module

# Initialize the priority queue correctly
priority_queue = queue.Queue()

class TrafficDirection:
    def __init__(self, name, semaphore_current, semaphore_next, light_id, traffic_count=0):
        self.name = name
        self.semaphore_current = semaphore_current
        self.semaphore_next = semaphore_next
        self.light_id = light_id
        self.traffic_count = traffic_count
        self.waiting_time = 0

    def run(self):
        while True:
            # Wait for semaphore
            self.semaphore_current.acquire()

            # Skip if emergency is active
            if emergency_active.is_set():
                update_light(self.light_id, "red")
                continue

            # Simulate traffic flow with more variations
            update_light(self.light_id, "green")
            
            # Randomize traffic flow with more realistic timing
            traffic_duration = random.randint(5, 10)  # Longer green light duration
            log_message(f"{self.name} traffic is moving. Green light for {traffic_duration} seconds.")
            
            # Simulate traffic vehicles
            self.traffic_count += random.randint(5, 20)
            update_traffic_stats(self.name, self.traffic_count)

            # Gradual light change
            time.sleep(traffic_duration)
            
            # Yellow light phase
            update_light(self.light_id, "yellow")
            log_message(f"{self.name} preparing to stop.")
            time.sleep(3)  # Yellow light duration
            
            # Red light
            update_light(self.light_id, "red")
            log_message(f"{self.name} traffic stopped.")

            # Release semaphore for the next direction
            self.semaphore_next.release()
            time.sleep(2)  # Pause between direction changes

# Global variables for tracking
total_traffic_count = {
    "north": 0, 
    "south": 0, 
    "east": 0, 
    "west": 0
}

# GUI and semaphore initialization
root = Tk()
root.title("Advanced Traffic Simulation")
root.geometry("600x500")  # Reduced window size

canvas = Canvas(root, width=400, height=400, bg="gray")
canvas.pack(pady=10)

# Traffic stats labels
stats_frame = Canvas(root, width=400, height=80, bg="lightgray")
stats_frame.pack(pady=10)

# Traffic light positions with more details
lights = {
    "north": canvas.create_oval(175, 50, 225, 100, fill="red"),
    "south": canvas.create_oval(175, 300, 225, 350, fill="red"),
    "east": canvas.create_oval(300, 175, 350, 225, fill="red"),
    "west": canvas.create_oval(50, 175, 100, 225, fill="red"),
    "pedestrian": canvas.create_oval(175, 175, 225, 225, fill="red"),
}

# Traffic stats text
traffic_stats_text = {}
for i, direction in enumerate(["North", "South", "East", "West"]):
    traffic_stats_text[direction.lower()] = stats_frame.create_text(
        50 + i*100, 40, 
        text=f"{direction} Traffic: 0", 
        font=("Arial", 10)
    )

# Update traffic stats
def update_traffic_stats(direction, count):
    total_traffic_count[direction] += count
    stats_frame.itemconfig(
        traffic_stats_text[direction], 
        text=f"{direction.capitalize()} Traffic: {total_traffic_count[direction]}"
    )

# Update light colors
def update_light(light_id, color):
    canvas.itemconfig(light_id, fill=color)

# Log messages
def log_message(message):
    print(message)

# Semaphores for traffic control
north_south = threading.Semaphore(1)  # Initially green for North-South
east_west = threading.Semaphore(0)    # Initially red for East-West
pedestrian_crossing = threading.Semaphore(0)  # Initially red for pedestrians

emergency_active = threading.Event()

# Emergency handling
def handle_emergency():
    # Stop all traffic with alert
    log_message("🚨 Emergency vehicle detected! Stopping all traffic.")
    messagebox.showwarning("Emergency", "Emergency Vehicle Approaching!")
    emergency_active.set()

    # Turn all lights red
    for direction in lights:
        update_light(lights[direction], "red")

    # Wait for 5 seconds
    time.sleep(5)

    # Resume normal traffic
    log_message("✅ Emergency vehicle has passed. Resuming normal traffic.")
    emergency_active.clear()

    # Release the semaphore to continue traffic flow
    north_south.release()

def trigger_emergency():
    # Trigger the emergency handling directly in a new thread
    threading.Thread(target=handle_emergency, daemon=True).start()

# Pedestrian crossing logic
crossing_in_progress = False

def handle_pedestrians():
    global crossing_in_progress
    if crossing_in_progress:
        log_message("⚠ Pedestrian crossing is already in progress!")
        return  # Don't start a new crossing if one is already in progress

    # Disable pedestrian button while crossing
    pedestrian_btn.config(state="disabled")

    crossing_in_progress = True
    stop_all_traffic_for_pedestrian()

    # Start pedestrian crossing
    update_status("Pedestrian Status: Crossing...", "green")
    
    # Randomize pedestrian crossing time
    crossing_time = random.randint(4, 7)
    root.after(crossing_time * 1000, finish_pedestrian_crossing)

def finish_pedestrian_crossing():
    global crossing_in_progress
    update_status("Pedestrian Status: Completed Crossing", "red")
    crossing_in_progress = False
    
    # Re-enable the pedestrian button
    pedestrian_btn.config(state="normal")
    
    # Resume traffic in correct order
    north_south.release()

def stop_all_traffic_for_pedestrian():
    # Stop all traffic signals to let pedestrians cross
    for direction in lights:
        update_light(lights[direction], "red")

    # Give time for all lights to turn red
    time.sleep(2)

def update_status(status, color):
    # Update pedestrian status in the main thread using root.after
    root.after(0, update_status_in_gui, status, color)

def update_status_in_gui(status, color):
    # Update the pedestrian status label and light color on the GUI
    pedestrian_status_label.config(text=status)
    update_light(lights["pedestrian"], color)

def allow_pedestrians():
    # Run pedestrian crossing in a separate thread to avoid blocking the main thread
    threading.Thread(target=handle_pedestrians, daemon=True).start()

# Initialize traffic directions with initial traffic count
north_traffic = TrafficDirection("north", north_south, east_west, lights["north"])
south_traffic = TrafficDirection("south", north_south, east_west, lights["south"])
east_traffic = TrafficDirection("east", east_west, north_south, lights["east"])
west_traffic = TrafficDirection("west", east_west, north_south, lights["west"])

# Start traffic flow threads
north_thread = threading.Thread(target=north_traffic.run, daemon=True)
south_thread = threading.Thread(target=south_traffic.run, daemon=True)
east_thread = threading.Thread(target=east_traffic.run, daemon=True)
west_thread = threading.Thread(target=west_traffic.run, daemon=True)

north_thread.start()
south_thread.start()
east_thread.start()
west_thread.start()

# Create pedestrian status label
pedestrian_status_label = Label(root, text="Pedestrian Status: Waiting", font=("Arial", 12), bg="lightgray")
pedestrian_status_label.pack(pady=10)

# Buttons for GUI with improved styling
emergency_btn = Button(root, text="🚨 Emergency Vehicle", command=trigger_emergency, bg="red", fg="white", font=("Arial", 10))
emergency_btn.pack(side='left', padx=10)

pedestrian_btn = Button(root, text="🚶 Allow Pedestrians", command=allow_pedestrians, bg="green", fg="white", font=("Arial", 10))
pedestrian_btn.pack(side='right', padx=10)

# Run the GUI main loop
root.mainloop()