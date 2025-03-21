# Drag and Drop Task Manager

A simple React application that allows you to manage tasks using a drag-and-drop interface. Tasks are organized into three columns: TODO, DOING, and DONE.

## Features

-   Add new tasks with an input field.
-   Edit existing tasks by clicking the edit icon.
-   Delete tasks by clicking the delete icon.
-   Drag and drop tasks between the TODO, DOING, and DONE columns.
-   Real-time updates of task status.

## Technologies Used

-   React
-   CSS (Custom `DragDrop.css`)
-   Remix Icon Library

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

5.  **Open your browser and go to `http://localhost:3000` to view the application.**

## Usage

1.  **Add a Task:**
    -   Type the task description in the input field.
    -   Press Enter to add the task to the TODO column.

2.  **Edit a Task:**
    -   Click the pencil icon next to the task you want to edit.
    -   The task's title will appear in the input field.
    -   Modify the title and press Enter to save the changes.

3.  **Delete a Task:**
    -   Click the trash bin icon next to the task you want to delete.

4.  **Drag and Drop Tasks:**
    -   Click and hold a task to drag it.
    -   Drag the task to the desired column (TODO, DOING, or DONE).
    -   Release the mouse button to drop the task.

