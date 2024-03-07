import java.io.ByteArrayInputStream;

public class ByteArrayInputStreamExample {
        public static void main(String[] args) {
                // Example usage
                byte[] data = "Hello, World!".getBytes();

                // ByteArrayInputStream example
                ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(data);
                int byteData;
                while ((byteData = byteArrayInputStream.read()) != -1) {
                        System.out.print((char) byteData);
                }
                System.out.println();
        }
}
