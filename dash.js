import java.util.Scanner;

public class DashboardApp {
    
    // Method to simulate the user dashboard
    public static void showDashboard() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Welcome to the Student Dashboard!");
        System.out.println("=================================");
        
        // Display options
        System.out.println("1. View Profile");
        System.out.println("2. Notifications");
        System.out.println("3. News");
        System.out.println("4. Courses");
        System.out.println("5. Logout");
        
        // Ask the user to select an option
        System.out.print("\nEnter the option number: ");
        int choice = scanner.nextInt();
        
        // Handle the user's choice
        switch (choice) {
            case 1:
                viewProfile();
                break;
            case 2:
                viewNotifications();
                break;
            case 3:
                viewNews();
                break;
            case 4:
                viewCourses();
                break;
            case 5:
                logout();
                break;
            default:
                System.out.println("Invalid choice. Please try again.");
                showDashboard();  // Show dashboard again for another try
        }
    }
    
    // Method to view profile
    public static void viewProfile() {
        System.out.println("\nStudent Profile:");
        System.out.println("Name: Jain Khushi Sanjay");
        System.out.println("Registration No.: 23FE10CDS00369");
        System.out.println("Rank: 1");
        System.out.println("Courses Completed: 10");
        showDashboard();
    }
    
    // Method to view notifications
    public static void viewNotifications() {
        System.out.println("\nNotifications: ");
        System.out.println("You have 3 new messages.");
        showDashboard();
    }
    
    // Method to view news
    public static void viewNews() {
        System.out.println("\nNews: ");
        System.out.println("New updates in your course available.");
        showDashboard();
    }
    
    // Method to view courses
    public static void viewCourses() {
        System.out.println("\nCourses: ");
        System.out.println("1. Java Programming");
        System.out.println("2. Data Structures");
        System.out.println("3. Web Development");
        showDashboard();
    }
    
    // Method to handle logout
    public static void logout() {
        System.out.println("\nYou have successfully logged out!");
        System.out.println("=================================");
        // Here you could close the program or redirect to a different screen
        System.exit(0);  // Ends the program
    }
    
    public static void main(String[] args) {
        // Start the dashboard application
        showDashboard();
    }
}
