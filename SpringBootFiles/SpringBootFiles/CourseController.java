package GROUP22.demo;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController
public class CourseController {
		
		@RequestMapping("/login")
		public String sayHello(Map<String, Object> model) {
		
			return "demo/src/main/Login.jsp";
		}
}



