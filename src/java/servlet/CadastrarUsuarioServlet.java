package servlet;

import dao.UsuarioDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import model.Usuario;


//Imports automáticos aparentemente não condizentes
/*
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
*/

@WebServlet(name = "CadastrarUsuarioServlet", urlPatterns = {"/CadastrarUsuarioServlet"})
public class CadastrarUsuarioServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        try (PrintWriter out = response.getWriter()) {
        
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>GET | Cadastrado</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Método GET utilizado</h1>");
            out.println("</body>");
            out.println("</html>");
            
        }
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        //Processar o cadastro do usuário
        String nome = request.getParameter("nome");
        String email = request.getParameter("email");
        String senha = request.getParameter("password");
        
        Usuario u = new Usuario();
        u.setNome(nome);
        u.setEmail(email);
        u.setSenha(senha);
        
        boolean inserido = UsuarioDAO.inserirUsuario(u);
        
        if(inserido) {
            try (PrintWriter out = response.getWriter()){
                out.println("<!DOCTYPE html>");
                out.println("<hmtl>");
                out.println("<head>");
                out.println("<title>Cadastro</title>");
                out.println("</head>");
                out.println("<body>");
                out.println("<h1>Usuário cadastrado com sucesso!</h1>");
                out.println("</body>");
                out.println("</html>");
            }
        }else{
                try (PrintWriter out = response.getWriter()){
                out.println("<!DOCTYPE html>");
                out.println("<hmtl>");
                out.println("<head>");
                out.println("<title>F</title>");
                out.println("</head>");
                out.println("<body>");
                out.println("<h1>Não deu certo!</h1>");
                out.println("</body>");
                out.println("</html>");
            }

        }
        
        
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
