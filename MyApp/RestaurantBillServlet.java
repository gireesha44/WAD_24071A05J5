import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RestaurantBillServlet extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        double amount = Double.parseDouble(req.getParameter("amount"));

        double gst = amount * 0.18;
        double finalBill = amount + gst;

        out.println("<html><body><center>");

        out.println("<h2>Restaurant Bill</h2>");
        out.println("<h3>Food Amount: " + amount + "</h3>");
        out.println("<h3>GST (18%): " + gst + "</h3>");
        out.println("<h3>Final Bill Amount: " + finalBill + "</h3>");

        out.println("<footer style='position:fixed; bottom:0; width:100%;'>");
        out.println("24071A05J5@copyright");
        out.println("</footer>");

        out.println("</center></body></html>");
    }
}