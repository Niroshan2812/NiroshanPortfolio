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

    @CrossOrigin(origins = "http://localhost:5174")
    @GetMapping
    public List<PotfolioDto> getAllPortfolios() {
        return portfolioSearvice.getPortfolios();
    }

    @GetMapping("/{id}")
    public PotfolioDto findPortfolioById(@PathVariable String id){
        return portfolioSearvice.getPortfolioById(id);
    }
    @PutMapping("/{id}")
    public PotfolioDto updatePortfolio(@PathVariable String id,@RequestBody PotfolioDto portfolioDto) {
        return portfolioSearvice.updatePortfolio(id, portfolioDto);
    }

    @DeleteMapping("/{id}")
    public void deletePortfolio(@PathVariable String id){
        portfolioSearvice.deletePortfolio(id);
    }
}
