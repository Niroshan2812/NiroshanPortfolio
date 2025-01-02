package org.niroshan.backend.Searvice.Impl;

import org.niroshan.backend.Model.Portfolio;
import org.niroshan.backend.Searvice.PortfolioSearvice;
import org.niroshan.backend.dto.PotfolioDto;
import org.niroshan.backend.mapping.PortfolioMapping;
import org.niroshan.backend.repository.PortfolioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PortfolioSearviceImpl implements PortfolioSearvice {

    private PortfolioRepository portfolioRepository;

    public PortfolioSearviceImpl(PortfolioRepository portfolioRepository) {
        this.portfolioRepository = portfolioRepository;
    }

    //Save portfolio in db
    @Override
    public PotfolioDto savePortfolio(PotfolioDto portfoliodto) {
        Portfolio portfolioEntity = PortfolioMapping.maptoPortfolio(portfoliodto);
        Portfolio savedPortfolio = portfolioRepository.save(portfolioEntity);
        return PortfolioMapping.maptoPotfolioDto(savedPortfolio);
    }

    //get Postfolio from db
    @Override
    public List<PotfolioDto> getPortfolios() {
        return portfolioRepository.findAll()
                .stream()
                .map(PortfolioMapping::maptoPotfolioDto)
                .collect(Collectors.toList());
    }

    // get portfolio by id
    @Override
    public PotfolioDto getPortfolioById(Long id) {
        Portfolio portfolio = portfolioRepository.findById(id).orElseThrow(
                ()-> new RuntimeException("Portfolio not found with id: " + id )
        );

        return PortfolioMapping.maptoPotfolioDto(portfolio);
    }

    //update portfolio by given id
    @Override
    public PotfolioDto updatePortfolio(Long id, PotfolioDto portfolioDto) {
        Portfolio portfolioEntity = portfolioRepository.findById(id).orElseThrow(
                ()-> new RuntimeException("Portfolio not found with id: " + id )
        );
        portfolioEntity.setShortDescription(portfolioDto.getShortDescription());
        portfolioEntity.setDescription(portfolioDto.getDescription());
        portfolioEntity.setGithubLink(portfolioDto.getGithubLink());
        Portfolio UpdatedPortfolio = portfolioRepository.save(portfolioEntity);
        return PortfolioMapping.maptoPotfolioDto(UpdatedPortfolio);
    }

    //Delete portfolio
    @Override
    public void deletePortfolio(Long id) {
        Portfolio portfolio = portfolioRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Portfolio not found with id: " + id )
        );
        portfolioRepository.delete(portfolio);
    }


}
