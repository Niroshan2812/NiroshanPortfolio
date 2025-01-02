package org.niroshan.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PotfolioDto {
    private Long id;
    private String shortDescription;
    private String description;
    private String githubLink;
}
