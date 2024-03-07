import java.io.*;

public class DataOutputStreamExample {
    public static void main(String[] args) throws IOException {
        // Example usage
        int intValue = 42;
        float floatValue = 3.14f;
        double doubleValue = 2.71828;

        // DataOutputStream example
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        DataOutputStream dataOutputStream = new DataOutputStream(byteArrayOutputStream);

        dataOutputStream.writeInt(intValue);
        dataOutputStream.writeFloat(floatValue);
        dataOutputStream.writeDouble(doubleValue);

        byte[] result = byteArrayOutputStream.toByteArray();
        DataInputStream dataInputStream = new DataInputStream(new ByteArrayInputStream(result));

        int readIntValue = dataInputStream.readInt();
        float readFloatValue = dataInputStream.readFloat();
        double readDoubleValue = dataInputStream.readDouble();

        System.out.println("Read Int Value: " + readIntValue);
        System.out.println("Read Float Value: " + readFloatValue);
        System.out.println("Read Double Value: " + readDoubleValue);
    }
}
