package org.niroshan.backend.Controller;

import org.niroshan.backend.Searvice.PortfolioSearvice;
import org.niroshan.backend.dto.PotfolioDto;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {
    private PortfolioSearvice portfolioSearvice;

    public PortfolioController(PortfolioSearvice portfolioSearvice) {
        this.portfolioSearvice = portfolioSearvice;
    }

    @PostMapping
    public PotfolioDto createPortfolio(@RequestBody PotfolioDto portfolioDto) {
        return portfolioSearvice.savePortfolio(portfolioDto);
    }
}
