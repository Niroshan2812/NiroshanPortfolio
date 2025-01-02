package org.niroshan.backend.dto;

public class PotfolioDto {
    private Long id;
    private String shortDescription;
    private String description;
    private String githubLink;

    public PotfolioDto(Long id, String shortDescription, String description, String githubLink) {
        this.id = id;
        this.shortDescription = shortDescription;
        this.description = description;
        this.githubLink = githubLink;
    }

    public PotfolioDto() {
    }

    public Long getId() {
        return this.id;
    }

    public String getShortDescription() {
        return this.shortDescription;
    }

    public String getDescription() {
        return this.description;
    }

    public String getGithubLink() {
        return this.githubLink;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }

    public boolean equals(final Object o) {
        if (o == this) return true;
        if (!(o instanceof PotfolioDto)) return false;
        final PotfolioDto other = (PotfolioDto) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$id = this.getId();
        final Object other$id = other.getId();
        if (this$id == null ? other$id != null : !this$id.equals(other$id)) return false;
        final Object this$shortDescription = this.getShortDescription();
        final Object other$shortDescription = other.getShortDescription();
        if (this$shortDescription == null ? other$shortDescription != null : !this$shortDescription.equals(other$shortDescription))
            return false;
        final Object this$description = this.getDescription();
        final Object other$description = other.getDescription();
        if (this$description == null ? other$description != null : !this$description.equals(other$description))
            return false;
        final Object this$githubLink = this.getGithubLink();
        final Object other$githubLink = other.getGithubLink();
        if (this$githubLink == null ? other$githubLink != null : !this$githubLink.equals(other$githubLink))
            return false;
        return true;
    }

    protected boolean canEqual(final Object other) {
        return other instanceof PotfolioDto;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $id = this.getId();
        result = result * PRIME + ($id == null ? 43 : $id.hashCode());
        final Object $shortDescription = this.getShortDescription();
        result = result * PRIME + ($shortDescription == null ? 43 : $shortDescription.hashCode());
        final Object $description = this.getDescription();
        result = result * PRIME + ($description == null ? 43 : $description.hashCode());
        final Object $githubLink = this.getGithubLink();
        result = result * PRIME + ($githubLink == null ? 43 : $githubLink.hashCode());
        return result;
    }

    public String toString() {
        return "PotfolioDto(id=" + this.getId() + ", shortDescription=" + this.getShortDescription() + ", description=" + this.getDescription() + ", githubLink=" + this.getGithubLink() + ")";
    }
}
