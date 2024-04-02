package DataInputStream;

import java.io.*;

public class DataInputStreamExample {
    public static void main(String[] args) throws IOException {
        // Example usage
        byte[] data = { 0, 0, 0, 42, 64, -16, 0, 0, 0, 0, 0, 0, 64, -8, 0, 0 };

        // DataInputStream example
        DataInputStream dataInputStream = new DataInputStream(new ByteArrayInputStream(data));
        int intValue = dataInputStream.readInt();
        float floatValue = dataInputStream.readFloat();
        double doubleValue = dataInputStream.readDouble();

        System.out.println("Int Value: " + intValue);
        System.out.println("Float Value: " + floatValue);
        System.out.println("Double Value: " + doubleValue);
    }
}
