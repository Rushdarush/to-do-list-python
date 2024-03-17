def view_tasks():
  if not tasks:
    print("There are no tasks in the list.")
  else:
    print("Your To-Do List:")
    for i, task in enumerate(tasks):
      print(f"{i+1}. {task}")

def add_task():
  task = input("Enter a task description: ")
  tasks.append(task)
  print("Task added successfully!")

def mark_done():
  if not tasks:
    print("There are no tasks to mark as done.")
    return
  view_tasks()
  index = int(input("Enter the index of the task to mark as done: ")) - 1
  if 0 <= index < len(tasks):
    removed_task = tasks.pop(index)
    print(f"Task '{removed_task}' marked as done!")
  else:
    print("Invalid task index.")

while True:
  print("\nTo-Do List App")
  print("1. View Tasks")
  print("2. Add Task")
  print("3. Mark Task Done")
  print("4. Exit")

  choice = input("Enter your choice (1-4): ")

  if choice == '1':
    view_tasks()
  elif choice == '2':
    add_task()
  elif choice == '3':
    mark_done()
  elif choice == '4':
    print("Exiting the program.")
    break
  else:
    print("Invalid choice. Please try again.")