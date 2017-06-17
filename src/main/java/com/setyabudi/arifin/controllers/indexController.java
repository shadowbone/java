/**
 *
 * @author Setyabudi
 */
package com.setyabudi.arifin.controllers;

import com.setyabudi.arifin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class indexController {
    
    @Autowired
    private UserService userService;
    
    @RequestMapping(value = "/*", method = RequestMethod.GET)
    public ModelAndView printHello() {
        ModelAndView model = new ModelAndView("login/index");
        String username = "admin";
        model.addObject("user",userService.findByUsername(username));
        model.addObject("message", "hello world");
        return model; 
    }

    @RequestMapping(value = "/ahay", method = RequestMethod.GET)
    public String printAhay(ModelMap model) {
        model.addAttribute("message", "ahay!");
        return "hello";
    }

}
