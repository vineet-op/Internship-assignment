import java.io.*;

public class ByteArrayOutputStreamExample {
    public static void main(String[] args) {
        // Example usage
        byte[] data = "Hello, World!".getBytes();

        // ByteArrayOutputStream example
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byteArrayOutputStream.write(data);
        byte[] result = byteArrayOutputStream.toByteArray();
        System.out.println(new String(result));
    }
}
