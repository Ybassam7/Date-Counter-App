# React Date Counter App

A simple React-based application that allows users to calculate and display a date based on a counter that can be incremented or decremented. The app uses `useState` for managing the step and count values, dynamically updates the displayed date, and displays the result with an intuitive user interface. It provides an easy-to-understand and interactive way to calculate future or past dates.

check it out live at : https://date-counter-app.vercel.app/

## Features and Best Practices

- **State Management with `useState`**:  
  Independently manage `step` and `count` values, allowing smooth updates to different parts of the app.
- **Dynamic Date Calculation**:  
  The app calculates the new date by adding or subtracting days from today, based on the current `count` and `step`.

- **Interactive Controls**:  
  Buttons allow users to increment or decrement `step` and `count`, adjusting the date dynamically.

- **Responsive Design**:  
  Ensures the app is adaptable to various screen sizes for an optimal user experience.

- **Conditional Rendering**:  
  Displays messages that change dynamically depending on the `count` value (e.g., "X days from today" or "X days ago").

- **Code Modularity and Readability**:  
  The app is organized with clear function names and well-managed states, making the code easy to understand and maintain.

## How It Works

- **Step Control**:  
  Users can adjust the `step` value by clicking the "+" and "-" buttons. This determines how many days to add or subtract when updating the count.

- **Count Control**:  
  The "+" and "-" buttons adjust the `count` value, changing the number of days to add or subtract from today's date.

- **Date Calculation**:  
  The date is dynamically updated based on the `count` and `step` values, showing how many days from today the calculated date is.

- **Date Display**:  
  The app shows the calculated date and dynamically adjusts the message:
  - `"Today is ..."` when the `count` is 0.
  - `"X days from today is ..."` when the `count` is positive.
  - `"X days ago was ..."` when the `count` is negative.

## Technologies

- React (functional components, hooks)
- JavaScript (Date object for date manipulation)
- CSS (styling for layout and responsiveness)
