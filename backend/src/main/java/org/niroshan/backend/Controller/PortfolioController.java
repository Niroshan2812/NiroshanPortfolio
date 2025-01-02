package org.niroshan.backend.Controller;

import lombok.AllArgsConstructor;
import org.niroshan.backend.Searvice.PortfolioSearvice;
import org.niroshan.backend.dto.PotfolioDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/portfolio")
@AllArgsConstructor
public class PortfolioController {
    private PortfolioSearvice portfolioSearvice;

    @PostMapping
    public PotfolioDto createPortfolio(@RequestBody PotfolioDto portfolioDto) {
        return  portfolioSearvice.savePortfolio(portfolioDto);
    }
}
