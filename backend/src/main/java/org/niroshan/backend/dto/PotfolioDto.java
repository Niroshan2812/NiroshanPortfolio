package org.niroshan.backend.dto;

import java.util.List;

public class PotfolioDto {
    private String id;
    private String name;
    private String shortDescription;
    private String description;
    private String githubLink;
    private List<String>imageUrls;
    private List<String> technology;
    private List<String> technologyimg;


    public PotfolioDto(String id,String name, String shortDescription, String description, String githubLink, List<String> imageUrls, List<String> technology, List<String> technologyimg) {
        this.id = id;
        this.name = name;
        this.shortDescription = shortDescription;
        this.description = description;
        this.githubLink = githubLink;
        this.imageUrls = imageUrls;
        this.technology = technology;
        this.technologyimg = technologyimg;
    }

    public PotfolioDto() {
    }

    public List<String> getTechnologyimg() {
        return technologyimg;
    }

    public void setTechnologyimg(List<String> technologyimg) {
        this.technologyimg = technologyimg;
    }

    public List<String> getTechnology() {
        return technology;
    }

    public void setTechnology(List<String> technology) {
        this.technology = technology;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
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

    public void setId(String id) {
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
        final Object this$name = this.getName();
        final Object other$name = other.getName();
        if(this$name == null ? other$name != null : !this$name.equals(other$name)) return false;
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

        final Object this$imageUrls = this.getImageUrls();
        final Object other$imageUrls = other.getImageUrls();
        if (this$imageUrls == null ? other$imageUrls != null : !this$imageUrls.equals(other$imageUrls)) {
            return false;
        }
        final Object this$technology = this.getTechnology();
        final Object other$technology = other.getTechnology();
        if(this$technology == null ? other$technology != null : !this$technology.equals(other$technology)){
            return false;
        }

        final Object this$technologyimg = this.getTechnologyimg();
        final Object other$technologyimg = other.getTechnologyimg();
        if(this$technologyimg == null ? other$technologyimg != null : !this$technologyimg.equals(other$technologyimg)){
            return false;
        }
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
        final Object $name = this.getName();
        result = result * PRIME + ($name == null ? 43 : $name.hashCode());
        final Object $shortDescription = this.getShortDescription();
        result = result * PRIME + ($shortDescription == null ? 43 : $shortDescription.hashCode());
        final Object $description = this.getDescription();
        result = result * PRIME + ($description == null ? 43 : $description.hashCode());
        final Object $githubLink = this.getGithubLink();
        result = result * PRIME + ($githubLink == null ? 43 : $githubLink.hashCode());
        final Object $imageUrls = this.getImageUrls();
        result = result * PRIME + ($imageUrls == null ? 43 : $imageUrls.hashCode());
        final Object $technology = this.getTechnology();
        result = result * PRIME + ($technology == null ? 43 : $technology.hashCode());
        final Object $technologyimg = this.getTechnologyimg();
        result = result * PRIME + ($technologyimg == null ? 43 : $technologyimg.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "PotfolioDto{" +
                "id=" + id +
                ", name=" + name + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", description='" + description + '\'' +
                ", githubLink='" + githubLink + '\'' +
                ", imageUrls=" + imageUrls +
                ", technology=" + technology +
                ", technologyimg=" + technologyimg +
                '}';
    }
}
