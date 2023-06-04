<%-- 
    Document   : teste
    Created on : 2 de jun. de 2023, 13:19:49
    Author     : PAULO
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>

<%
    
    
    // Verifica se o arquivo de recordes existe
    File file = new File("recordes.txt");
    if (!file.exists()) {
        file.createNewFile();
    }

    // Obtém a pontuação atual do jogo
    int pontuacaoAtual = Integer.parseInt(request.getParameter("RECORDE"));

    // Lê o arquivo de recordes
    BufferedReader reader = new BufferedReader(new FileReader(file));
    String linha;
    int recorde = 0;
    while ((linha = reader.readLine()) != null) {
        int pontuacao = Integer.parseInt(linha);
        if (pontuacao > recorde) {
            recorde = pontuacao;
        }
    }
    reader.close();

    // Verifica se a pontuação atual é maior do que o recorde anterior
    boolean novoRecorde = pontuacaoAtual > recorde;

    // Atualiza o recorde se houver um novo recorde
    if (novoRecorde) {
        BufferedWriter writer = new BufferedWriter(new FileWriter(file));
        writer.write(String.valueOf(pontuacaoAtual));
        writer.close();
    }
%>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="recordes.css">
    <title>Placar de Recordes</title>
</head>
<body>
    <h1>Placar de Recordes</h1>

    <% if (novoRecorde) { %>
        <p>Parabéns! Você bateu o recorde com uma pontuação de <%= pontuacaoAtual %> pontos!</p>
    <% } else { %>
        <p>Pontuação atual: <%= pontuacaoAtual %> pontos</p>
        <p>Melhor recorde: <%= recorde %> pontos</p>
    <% } %>
    <p><a href="index.html"> &lt;-- Voltar ao jogo</a></p>
</body>
</html>