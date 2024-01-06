import {PackFilters} from "@/feature/packs-list/pack-filters";
import {PackTable} from "@/feature/packs-list/pack-table";

export const PacksList = () => {
  return (
    <div>
      <PackFilters switcherLabel={'Show packs cards'} sliderLabel={'Number of cards'}/>
      <PackTable/>
    </div>
  )
}