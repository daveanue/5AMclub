# Project TechStack
1.  **Frontend**:
  - React w. TypeScript
  - React Router
  - css library(undecided)
2.  **Backend**:
  - Python w. Flask
  - DynamoDB
  - AWS SDK Boto3 (undecided)

# Client-Side Cart Management
   1. **Pros**:
      - Fast and responsive user experience since no server round-trip for adding items to cart.
      - Reduced server load as cart updates are handled on client side
      - Immediate feedback to users as they interact with the cart
       **Cons**:
      - Potential data inconsistency if the client's cart and the server's cart go out of sync due to various factors (e.g., multiple devices, page reloads).
      - When the user eventually decides to checkout, you need to send the cart data to the server for processing the order.
   2. **Server-side Data Validation**
      - Before checking out / finalizing order, perform server-side checks to validate item avaliability, and etc.
      
# Using Virtual Environment for Python

A virtual environment is like a little sandbox where you can set up specific packages and dependencies for a particular project, without messing up other projects or the system-wide Python installation. Here's how to create and use one:

1. **Open Terminal or Command Prompt**:

   - On Windows, you can use Command Prompt or PowerShell.
   - On macOS and Linux, the built-in terminal is your friend.

2. **Navigate to Your Project Directory**:

   Use the `cd` command to move to the directory where you're setting up your project.

3. **Create a Virtual Environment**:

   Run the following command to create a virtual environment named "venv" (you can name it whatever you like):

   ```
   python -m venv venv
   ```

4. **Activate the Virtual Environment**:

   On macOS and Linux:
   ```
   source venv/bin/activate
   ```

   When the virtual environment is activated, you'll see its name in your terminal prompt.

5. **Install Dependencies**:

   Now, you can use pip to install packages specifically for this project. For example:

   ```
   pip install Flask
   ```

6. **Deactivate the Virtual Environment**:

   Once you're done with your work, you can deactivate the virtual environment:

   ```
   deactivate
   ```
once the virtual environment is deactivated, any packages you install or changes you make won't affect your system-wide Python installation or other projects.

# Database Connection
- Usage of Boto3 to work with AWS services in Python
