/**
 *
 * @author Setyabudi
 */
package com.setyabudi.arifin.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class indexController {

    @RequestMapping(value = "/*", method = RequestMethod.GET)
    public ModelAndView printHello() {
        ModelAndView model = new ModelAndView("index");
        model.addObject("message", "hello world");
        return model; 
    }

    @RequestMapping(value = "/ahay", method = RequestMethod.GET)
    public String printAhay(ModelMap model) {
        model.addAttribute("message", "ahay!");
        return "hello";
    }

}
