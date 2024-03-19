import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Configuration
@ComponentScan
@EnableAspectJAutoProxy
public class Main {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Main.class);
        MyService service = context.getBean(MyService.class);
        service.doSomething();
        context.close();
    }

    @Service
    public static class MyService {

        public void doSomething() {
            System.out.println("Doing something...");
        }
    }

    @Aspect
    @Component
    public static class LoggingAspect {

        @Before("execution(* Main.MyService.*(..))")
        public void logBefore(JoinPoint joinPoint) {
            System.out.println("Method invoked: " + joinPoint.getSignature().getName());
        }
    }
}
