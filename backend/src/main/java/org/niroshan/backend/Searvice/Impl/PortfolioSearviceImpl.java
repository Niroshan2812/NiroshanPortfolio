package org.niroshan.backend.Searvice.Impl;

import org.niroshan.backend.Model.Portfolio;
import org.niroshan.backend.Searvice.PortfolioSearvice;
import org.niroshan.backend.dto.PotfolioDto;
import org.niroshan.backend.mapping.PortfolioMapping;
import org.niroshan.backend.repository.PortfolioRepository;
import org.springframework.stereotype.Service;

@Service
public class PortfolioSearviceImpl implements PortfolioSearvice {

    private PortfolioRepository portfolioRepository;

    public PortfolioSearviceImpl(PortfolioRepository portfolioRepository) {
        this.portfolioRepository = portfolioRepository;
    }

    @Override
    public PotfolioDto savePortfolio(PotfolioDto portfoliodto) {
        Portfolio portfolioEntity = PortfolioMapping.maptoPortfolio(portfoliodto);
        Portfolio savedPortfolio = portfolioRepository.save(portfolioEntity);
        return PortfolioMapping.maptoPotfolioDto(savedPortfolio);
    }
}
