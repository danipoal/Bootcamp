package paquetePrincipal;

import java.sql.SQLException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws  SQLException{

        Scanner sc = new Scanner(System.in);
        System.out.println("Bienvenido a la agenda de Dani");

            Agenda agenda = new Agenda();

        int opcion = -1;
        while(opcion != 0) {
            System.out.print("1: Añadir un contacto\n");
            System.out.print("2: Ver un contacto\n");
            System.out.print("3: Actualizar un contacto\n");
            System.out.print("4: Eliminar un contacto\n");
            System.out.print("5: Ver todos los contactos\n");
            System.out.print("6: Introducir contactos random\n");
            System.out.print("7: Eliminar todos los contactos");
            System.out.print("\n0: SALIR\n");

            System.out.print("Elije una opción :");
            opcion = sc.nextInt();
            switch (opcion) {
                case 1:
                    System.out.print("Creando ");
                    opcion = 8;
                    break;

                case 2:
                    System.out.println("Que ID de contacto quieres ver?");
                    int id_selected = sc.nextInt();
                    agenda.readId(id_selected);
                    break;
            }

        }
        sc.close();
        agenda.disconnect();
    }
}