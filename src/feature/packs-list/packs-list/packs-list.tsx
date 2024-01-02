
import {PackTable} from "@/feature/packs-list/packs-list/pack-table/pack-table";
import {PackFilters} from "@/feature/packs-list/packs-list/pack-filters/pack-filters";

export const PacksList = () => {
  return (
    <div>
      <PackFilters switcherLabel={'Show packs cards'} sliderLabel={'Number of cards'}/>
      <PackTable/>
    </div>
  )
}