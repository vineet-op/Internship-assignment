import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileCopyExample {

    public static void main(String[] args) {
        String sourceFilePath = "C:\\Users\\vinee\\Downloads\\SpringBuffer\\SpringBuffered01\\text.txt";
        String destinationFilePath = "destination.txt";

        try {
            copyFile(sourceFilePath, destinationFilePath);
            System.out.println("File copied successfully.");
        } catch (IOException e) {
            System.err.println("Error copying file: " + e.getMessage());
        }
    }

    public static void copyFile(String sourceFilePath, String destinationFilePath) throws IOException {
        try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream(sourceFilePath));
                BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(destinationFilePath))) {

            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = bis.read(buffer)) != -1) {
                bos.write(buffer, 0, bytesRead);
            }
        }
    }
}
