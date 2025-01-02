package org.niroshan.backend.Controller;

import org.niroshan.backend.Searvice.PortfolioSearvice;
import org.niroshan.backend.dto.PotfolioDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    public List<PotfolioDto> getAllPortfolios() {
        return portfolioSearvice.getPortfolios();
    }

    @GetMapping("/{id}")
    public PotfolioDto findPortfolioById(@PathVariable Long id){
        return portfolioSearvice.getPortfolioById(id);
    }
    @PutMapping("/{id}")
    public PotfolioDto updatePortfolio(@PathVariable Long id,@RequestBody PotfolioDto portfolioDto) {
        return portfolioSearvice.updatePortfolio(id, portfolioDto);
    }

    @DeleteMapping("/{id}")
    public void deletePortfolio(@PathVariable Long id){
        portfolioSearvice.deletePortfolio(id);
    }
}
