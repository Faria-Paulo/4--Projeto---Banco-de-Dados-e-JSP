package dao;

import com.mysql.cj.jdbc.Driver;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;
import model.Usuario;

public class UsuarioDAO {
    // throws serve para adiar o uso do try e catch lá onde a função está sendo chamada, para que não precise estar aqui.
    /*
    public static Connection conectar() throws ClassNotFoundException, SQLException{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conectado = DriverManager.getConnection("jdbc:mysql://localhost:3306/highscore", "root", "admin");
        return conectado;
    }
    */
    
    /*
    private static final String SELECT_SQL = "SELECT * FROM usuario";
    private static final String INSERT_SQL = "INSERT INTO usuario";
    private static final String UPDATE_SQL = "UPDATE usuario";
    private static final String DELETE_SQL = "DELETE usuario";
    */
    
    /*
    public static void salvarDepartamento(Usuario usuario) throws ClassNotFoundException, SQLException{
        Connection conectado = conectar();
        //Inserir dados digitados na tabela
        PreparedStatement st = conectado.prepareStatement("INSERT INTO usuario VALUES(?, ?, ?)");
        st.setString(1, usuario.getNome());
        st.setString(2, usuario.getEmail());
        st.setString(3, usuario.getSenha());
        st.executeUpdate(); //executa o insert na tabela
    }
    */
    
    /*
    public static boolean inserirUsuario(Usuario u) {;
        throw new UnsupportedOperationException("Ainda não");
    }
    */
    
    public static void main(String[] args){
        
        Scanner scanner = new Scanner(System.in);
        
        String nome = scanner.nextLine();
        String email = scanner.nextLine();
        String senha = scanner.nextLine();
        
        Usuario u = new Usuario();
        u.setNome(nome);
        u.setNome(email);
        u.setNome(senha);
        
        inserirUsuario(u);
        
    }
    
    public static boolean inserirUsuario(Usuario u){
        
        boolean sucesso = false;
        
        try {
            Driver driver = new Driver();
            DriverManager.registerDriver(driver);
            
            Connection c = DriverManager.getConnection("jdbc:mysql://localhost:3306/highscore", "root", "admin");
            
            PreparedStatement stmt;
            stmt = c.prepareStatement("INSERT INTO usuario (nome, email, senha) VALUES(?, ?, ?)");
            
            stmt.setString(1, u.getNome());
            stmt.setString(2, u.getEmail());
            stmt.setString(3, u.getSenha());
            
            int rowsAffected = stmt.executeUpdate();
            
            if(rowsAffected > 0){
                sucesso = true;
            }
            
        } catch (SQLException e){
            e.printStackTrace();
        }
        
        return sucesso;
    }
}
    
