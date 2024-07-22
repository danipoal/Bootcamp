public class Main {
    private int dinero;
    private String Nombre;

    public Main(int dinero, String nombre) {
        this.dinero = dinero;
        Nombre = nombre;
    }

    public static void main(String[] args) {
        System.out.println("Hello world!");
    }

    public int getDinero() {
        return dinero;
    }

    public void setDinero(int dinero) {
        this.dinero = dinero;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }
}