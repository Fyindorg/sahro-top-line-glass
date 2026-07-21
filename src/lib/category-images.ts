import automaticSlidingDoorSystem from "@/assets/categories/automatic-sliding-door-system.jpg";
import balustradeAccessories from "@/assets/categories/balustrade-accessories.jpg";
import bathroomGlassClamps from "@/assets/categories/bathroom-glass-clamps.jpg";
import bathroomHinges from "@/assets/categories/bathroom-hinges.jpg";
import bathroomAccessoriesSet from "@/assets/categories/bathroom-accessories-set.jpg";
import bathroomMirrors from "@/assets/categories/bathroom-mirrors.jpg";
import curtainWallAccessories from "@/assets/categories/curtain-wall-accessories.jpg";
import doorClosers from "@/assets/categories/door-closers.jpg";
import fingerprintDoorLocks from "@/assets/categories/fingerprint-door-locks.jpg";
import floorHinges from "@/assets/categories/floor-hinges.jpg";
import foldingDoorSystems from "@/assets/categories/folding-door-systems.jpg";
import glassDoorGatingSets from "@/assets/categories/glass-door-gating-sets.jpg";
import glassConnections from "@/assets/categories/glass-connections.jpg";
import glassConnectors from "@/assets/categories/glass-connectors.jpg";
import glassDoorLocks from "@/assets/categories/glass-door-locks.jpg";
import luxuriousGlassDoorHandles from "@/assets/categories/luxurious-glass-door-handles.jpg";
import glassDoorPatchFittings from "@/assets/categories/glass-door-patch-fittings.jpg";
import pvcSealingStrips from "@/assets/categories/pvc-sealing-strips.jpg";
import showerRoomSets from "@/assets/categories/shower-room-sets.jpg";
import slidingWheels from "@/assets/categories/sliding-wheels.jpg";
import stairHandrails from "@/assets/categories/stair-handrails.jpg";
import swingDoors from "@/assets/categories/swing-doors.jpg";
import windowDoorHardware from "@/assets/categories/window-door-hardware.jpg";
import productBg from "@/assets/product-bg.webp";

const CATEGORY_IMAGES: Record<string, string> = {
  "automatic-sliding-door-system": automaticSlidingDoorSystem,
  "balustrade-accessories": balustradeAccessories,
  "bathroom-glass-clamps": bathroomGlassClamps,
  "bathroom-hinges": bathroomHinges,
  "bathroom-accessories-set": bathroomAccessoriesSet,
  "bathroom-mirrors": bathroomMirrors,
  "curtain-wall-accessories": curtainWallAccessories,
  "door-closers": doorClosers,
  "fingerprint-door-locks": fingerprintDoorLocks,
  "floor-hinges": floorHinges,
  "folding-door-systems": foldingDoorSystems,
  "glass-door-gating-sets": glassDoorGatingSets,
  "glass-connections": glassConnections,
  "glass-connectors": glassConnectors,
  "glass-door-locks": glassDoorLocks,
  "luxurious-glass-door-handles": luxuriousGlassDoorHandles,
  "glass-door-patch-fittings": glassDoorPatchFittings,
  "pvc-sealing-strips": pvcSealingStrips,
  "shower-room-sets": showerRoomSets,
  "sliding-wheels": slidingWheels,
  "stair-handrails": stairHandrails,
  "swing-doors": swingDoors,
  "window-door-hardware": windowDoorHardware,
};

export const categoryImage = (slug: string): string =>
  CATEGORY_IMAGES[slug] ?? productBg;
