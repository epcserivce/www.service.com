const carpenterCategories = [
      {
        id: "wooden-door",
        title: "Wooden door",
        subtitle: "Door Repair, Installation & Locks",
        image: "./images/wooden door.jpeg",
        mainServices: [
          {
            title: "Door repair",
            rating: "4.78 (166K reviews)",
            img: "./images/door repair main.jpeg",
            subServices: [
              { id: "dr-1", name: "Tower bolt/ Latch repair", rating: "4.75 (2K reviews)", price: 99, img: "./images/tower bolt-latch repair.jpeg" },
              { id: "dr-2", name: "Bottom stopper repair", rating: "4.80 (730 reviews)", price: 99, img: "./images/6.jpeg" },
              { id: "dr-3", name: "Handle lock repair", rating: "4.79 (75K reviews)", price: 229, img: "./images/handle lock repair.jpeg" },
              { id: "dr-4", name: "Hinge Repair (per hinge)", rating: "4.82 (12K reviews)", price: 149, img: "./images/hinge repair(per hinge).jpeg" },
              { id: "dr-5", name: "Door not closing (swelling)", rating: "4.76 (5K reviews)", price: 299, img: "./images/door not closing (swelling).jpeg" },
              { id: "dr-6", name: "Sliding Wooden repair", rating: "4.76 (5K reviews)", price: 299, img: "./images/sliding wooden repair.jpeg" },
              { id: "dr-7", name: "Misalignment issues", rating: "4.76 (5K reviews)", price: 299, img: "./images/misalignment issues.jpeg" }
            ]
          },
          {
            title: "New Door Installation",
            rating: "4.85 (12K reviews)",
            img: "./images/New Door Installation.jpeg",
            subServices: [
              { id: "ndi-1", name: "Wooden Door Installation", rating: "4.88 (8K reviews)", price: 999, img: "./images/wooden door installation.jpeg" },
              { id: "ndi-2", name: "Sliding Wooden Door", rating: "4.80 (4K reviews)", price: 1299, img: "./images/sliding wooden door.jpeg" }
            ]
          },
          {
            title: "Door Locks & Latches Repair",
            rating: "4.80 (45K reviews)",
            img: "./images/3.jpeg",
            subServices: [
              { id: "dll-1", name: "Chain Latch Repair", rating: "4.81 (3K reviews)", price: 129, img: "./images/chain latch repair.jpeg" },
              { id: "dll-2", name: "Lockable Latch", rating: "4.84 (10K reviews)", price: 199, img: "./images/lockable latch.jpeg" },
              { id: "dll-3", name: "Tower Bolt", rating: "4.84 (10K reviews)", price: 199, img: "./images/Tower Bolt.jpeg" },
              { id: "dll-4", name: "Handle lock", rating: "4.84 (10K reviews)", price: 199, img: "./images/Handle lock.jpeg" },
              { id: "dll-5", name: "Round Knob Lock", rating: "4.79 (15K reviews)", price: 249, img: "./images/round knob lock.jpeg" }
            ]
          },
          {
            title: "Door Lock replace and install",
            rating: "4.80 (45K reviews)",
            img: "./images/4.jpeg",
            subServices: [
              { id: "dlr-1", name: "Chain Latch Repair", rating: "4.81 (3K reviews)", price: 129, img: "./images/chain latch repair.jpeg" },
              { id: "dlr-2", name: "Lockable Latch", rating: "4.84 (10K reviews)", price: 199, img: "./images/lockable latch.jpeg" },
              { id: "dlr-3", name: "Tower Bolt", rating: "4.84 (10K reviews)", price: 199, img: "./images/Tower Bolt.jpeg" },
              { id: "dlr-4", name: "Handle lock", rating: "4.84 (10K reviews)", price: 199, img: "./images/Handle lock.jpeg" },
              { id: "dlr-5", name: "Handle lock replacement", rating: "4.84 (10K reviews)", price: 199, img: "./images/Handle lock replacement.jpeg" },
              { id: "dlr-6", name: "Handle Lock installation", rating: "4.84 (10K reviews)", price: 199, img: "./images/Handle Lock installation.jpeg" },
              { id: "dlr-7", name: "Round Knob Lock", rating: "4.79 (15K reviews)", price: 249, img: "./images/round knob lock.jpeg" }
            ]
          },
          {
            title: "Door Hinges repair and replacement",
            rating: "4.80 (45K reviews)",
            img: "./images/5.jpeg",
            subServices: [
              { id: "dhr-1", name: "Hinge Repair (per Hinge)", rating: "4.81 (3K reviews)", price: 129, img: "./images/hinge repair(per hinge).jpeg" },
              { id: "dhr-2", name: "Replacement (per Hinge)", rating: "4.84 (10K reviews)", price: 199, img: "./images/Replacement (per Hinge).jpeg" }
            ]
          },
          {
            title: "Door accessories & mesh installation",
            rating: "4.80 (45K reviews)",
            img: "./images/6.jpeg",
            subServices: [
              { id: "dam-1", name: "Chain Latch", rating: "4.81 (3K reviews)", price: 129, img: "./images/Chain Latch.jpeg" },
              { id: "dam-2", name: "Lockable latch", rating: "4.84 (10K reviews)", price: 199, img: "./images/Lockable latch.jpeg" },
              { id: "dam-3", name: "Tower Bolt", rating: "4.84 (10K reviews)", price: 199, img: "./images/Tower Bolt.jpeg" },
              { id: "dam-4", name: "Bottom Stopper Repair", rating: "4.84 (10K reviews)", price: 199, img: "./images/6.jpeg" },
              { id: "dam-5", name: "Peephole", rating: "4.79 (15K reviews)", price: 249, img: "./images/Peephole.jpeg" },
              { id: "dam-6", name: "Overhead /Wall mounted Closer", rating: "4.79 (15K reviews)", price: 249, img: "./images/Overhead -Wall mounted Closer.jpeg" },
              { id: "dam-7", name: "Consealed Closer", rating: "4.79 (15K reviews)", price: 249, img: "./images/Consealed Closer.jpeg" },
              { id: "dam-8", name: "Mesh Replacement", rating: "4.79 (15K reviews)", price: 249, img: "./images/Mesh Replacement.jpeg" }
            ]
          }
        ]
      },
      {
        id: "cupboard-drawer",
        title: "Cupboard & drawer",
        subtitle: "Cupboard repair, locks & drawer channels",
        image: "./images/Cupboard & drawer.jpeg",
        mainServices: [
          {
            title: "Cupboard repair & Installation",
            rating: "4.82 (15K reviews)",
            img: "./images/7.jpeg",
            subServices: [
              { id: "cd-1", name: "Handle Repair Replacement", rating: "4.85 (5K)", price: 149, img: "./images/Handle Repair Replacement.jpeg" },
              { id: "cd-2", name: "Cupboard rod Installation", rating: "4.80 (3K)", price: 199, img: "./images/Cupboard rod Installation.jpeg" },
              { id: "cd-3", name: "Hinge repair/replace (upto 2)", rating: "4.83 (7K)", price: 249, img: "./images/Hinge repair-replace (upto 2).jpeg" },
              { id: "cd-4", name: "Regular Channel repair", rating: "4.81 (5K)", price: 299, img: "./images/Regular Channel repair.jpeg" },
              { id: "cd-5", name: "Soft Close Channel repair", rating: "4.79 (3K)", price: 399, img: "./images/Soft Close Channel repair.jpeg" },
              { id: "cd-6", name: "Cupboard sliding door repair", rating: "4.79 (3K)", price: 499, img: "./images/Cupboard sliding door repair.jpeg" }
            ]
          },
          {
            title: "Cupboard & Drawer locks",
            rating: "4.82 (15K reviews)",
            img: "./images/8.jpeg",
            subServices: [
              { id: "cdl-1", name: "Magnet Repair / Install", rating: "4.85 (5K)", price: 149, img: "./images/Magnet Repair - Install.jpeg" },
              { id: "cdl-2", name: "Latch repair /install", rating: "4.80 (3K)", price: 199, img: "./images/Latch repair - install.jpeg" },
              { id: "cdl-3", name: "Drawer lock installation", rating: "4.83 (7K)", price: 249, img: "./images/Drawer lock installation.jpeg" },
              { id: "cdl-4", name: "Cupboard lock Installation", rating: "4.81 (5K)", price: 299, img: "./images/Cupboard lock Installation.jpeg" }
            ]
          },
          {
            title: "Drawer repair & Installation services",
            rating: "4.82 (15K reviews)",
            img: "./images/9.jpeg",
            subServices: [
              { id: "cdr-1", name: "Drawer handle repair/installation", rating: "4.85 (5K)", price: 149, img: "./images/Drawer handle repair - installation.jpeg" },
              { id: "cdr-2", name: "Regular Channel repair", rating: "4.80 (3K)", price: 199, img: "./images/Regular Channel repair.jpeg" },
              { id: "cdr-3", name: "Drawer lock installation", rating: "4.83 (7K)", price: 249, img: "./images/Drawer lock installation.jpeg" },
              { id: "cdr-4", name: "Soft close channel repair", rating: "4.81 (5K)", price: 299, img: "./images/Soft close channel repair.jpeg" }
            ]
          },
          {
            title: "Décor Installation (small)",
            rating: "4.90 (15K reviews)",
            img: "./images/10.jpeg",
            subServices: [
              { id: "dec-s-1", name: "1 time (frame, Clock & Painting)", rating: "4.91 (2K)", price: 149, img: "./images/decor-small-1.jpeg" },
              { id: "dec-s-2", name: "2 times", rating: "4.90 (1K)", price: 249, img: "./images/decor-small-2.jpeg" },
              { id: "dec-s-3", name: "3 times", rating: "4.89 (800)", price: 349, img: "./images/decor-small-3.jpeg" },
              { id: "dec-s-4", name: "4 times", rating: "4.88 (600)", price: 449, img: "./images/decor-small-4.jpeg" },
              { id: "dec-s-5", name: "5 times", rating: "4.87 (500)", price: 549, img: "./images/decor-small-5.jpeg" },
              { id: "dec-s-6", name: "6 times", rating: "4.86 (400)", price: 649, img: "./images/decor-small-6.jpeg" },
              { id: "dec-s-7", name: "7 times", rating: "4.85 (300)", price: 749, img: "./images/decor-small-7.jpeg" },
              { id: "dec-s-8", name: "8 times", rating: "4.84 (200)", price: 849, img: "./images/decor-small-8.jpeg" }
            ]
          },
          {
            title: "Décor Installation (Large)",
            rating: "4.88 (10K reviews)",
            img: "./images/11.jpeg",
            subServices: [
              { id: "dec-l-1", name: "1 time (frame, Clock & Painting)", rating: "4.89 (1.5K)", price: 199, img: "./images/decor-large-1.jpeg" },
              { id: "dec-l-2", name: "2 times", rating: "4.88 (900)", price: 349, img: "./images/decor-large-2.jpeg" },
              { id: "dec-l-3", name: "3 times", rating: "4.87 (700)", price: 499, img: "./images/decor-large-3.jpeg" },
              { id: "dec-l-4", name: "4 times", rating: "4.86 (500)", price: 649, img: "./images/decor-large-4.jpeg" },
              { id: "dec-l-5", name: "5 times", rating: "4.85 (400)", price: 799, img: "./images/decor-large-5.jpeg" },
              { id: "dec-l-6", name: "6 times", rating: "4.84 (300)", price: 949, img: "./images/decor-large-6.jpeg" },
              { id: "dec-l-7", name: "7 times", rating: "4.83 (200)", price: 1099, img: "./images/decor-large-7.jpeg" },
              { id: "dec-l-8", name: "8 times", rating: "4.82 (150)", price: 1249, img: "./images/decor-large-8.jpeg" }
            ]
          },
          {
            title: "Mirror Installation",
            rating: "4.87 (12K reviews)",
            img: "./images/12.jpeg",
            subServices: [
              { id: "mir-1", name: "Small (Upto 2ft & 3ft)", rating: "4.88 (8K)", price: 199, img: "./images/mirror-small.jpeg" },
              { id: "mir-2", name: "Large (Upto 2ft & 6ft)", rating: "4.86 (4K)", price: 299, img: "./images/mirror-large.jpeg" }
            ]
          },
          {
            title: "Ceiling Hook/Fastener Installation",
            rating: "4.81 (5K reviews)",
            img: "./images/13.jpeg",
            subServices: [
              { id: "chk-1", name: "Ceiling Hook / Fastener Installation", rating: "4.81 (5K)", price: 149, img: "./images/ceiling-hook.jpeg" }
            ]
          }
        ]
      },
      {
        id: "shelf-cabinet",
        title: "Shelf & cabinet",
        subtitle: "Floating shelves, Wall Cabinet & Bath Cabinets",
        image: "./images/Shelf & cabinet.jpeg",
        mainServices: [
          {
            title: "Shelf & Cabinet Installation",
            rating: "4.85 (18K reviews)",
            img: "./images/14.jpeg",
            subServices: [
              { id: "sc-1", name: "Wooden Shelf", rating: "4.86 (10K)", price: 199, img: "./images/Wooden Shelf.jpeg" },
              { id: "sc-2", name: "Corner Shelf", rating: "4.85 (5K)", price: 299, img: "./images/Corner Shelf.jpeg" },
              { id: "sc-3", name: "Glass Floating Shelf", rating: "4.81 (8K)", price: 449, img: "./images/Glass Floating Shelf.jpeg" }
            ]
          },
          {
            title: "Wall Cabinet assembly & Installation",
            rating: "4.85 (18K reviews)",
            img: "./images/15.jpeg",
            subServices: [
              { id: "wca-1", name: "Small (Upto 2*2ft)", rating: "4.86 (10K)", price: 199, img: "./images/Small.jpeg" },
              { id: "wca-2", name: "Large (Upto 4*3 ft)", rating: "4.85 (5K)", price: 299, img: "./images/Large.jpeg" }
            ]
          },
          {
            title: "Bathroom mirror Cabinet Installation & Assembly",
            rating: "4.85 (18K reviews)",
            img: "./images/16.jpeg",
            subServices: [
              { id: "bmc-1", name: "With 1 Door", rating: "4.86 (10K)", price: 199, img: "./images/With 1 Door.jpeg" },
              { id: "bmc-2", name: "With 2 Door", rating: "4.85 (5K)", price: 299, img: "./images/With 2 Door.jpeg" }
            ]
          }
        ]
      },
      {
        id: "Lock & Hinge",
        title: "Lock & Hinge",
        subtitle: "Door lock and Latches Repair, Door lock replace and Install",
        image: "./images/Lock & Hinge.jpeg",
        mainServices: [
          {
            title: "Door lock and Latches Repair",
            rating: "4.82 (15K reviews)",
            img: "./images/17.jpeg",
            subServices: [
              { id: "dlr-1", name: "Chain Latch", rating: "4.85 (5K)", price: 149, img: "./images/Chain Latch.jpeg" },
              { id: "dlr-2", name: "Lockable Latch", rating: "4.80 (3K)", price: 199, img: "./images/Lockable Latch.jpeg" },
              { id: "dlr-3", name: "Tower Bolt", rating: "4.83 (7K)", price: 249, img: "./images/Hinge repair-replace (upto 2).jpeg" },
              { id: "dlr-4", name: "Handle Lock", rating: "4.81 (5K)", price: 299, img: "./images/Regular Channel repair.jpeg" },
              { id: "dlr-5", name: "Round Knob Lock", rating: "4.79 (3K)", price: 399, img: "./images/Soft Close Channel repair.jpeg" }
            ]
          },
          {
            title: "Door lock replace and Install services",
            rating: "4.82 (15K reviews)",
            img: "./images/18.jpeg",
            subServices: [
              { id: "dli-1", name: "Lockable Latch", rating: "4.85 (5K)", price: 149, img: "./images/Lockable Latch.jpeg" },
              { id: "dli-2", name: "Tower Bolt", rating: "4.80 (3K)", price: 199, img: "./images/Tower Bolt.jpeg" },
              { id: "dli-3", name: "Chain Latch", rating: "4.83 (7K)", price: 249, img: "./images/Chain Latch.jpeg" },
              { id: "dli-4", name: "Handle Lock Replacement", rating: "4.81 (5K)", price: 299, img: "./images/Handle Lock Replacement.jpeg" },
              { id: "dli-5", name: "Round Knob Lock", rating: "4.79 (3K)", price: 399, img: "./images/Round Knob Lock.jpeg" },
              { id: "dli-6", name: "Handle Lock Installation", rating: "4.79 (3K)", price: 399, img: "./images/Handle Lock Installation.jpeg" }
            ]
          },
          {
            title: "Cupboard & Drawer locks",
            rating: "4.82 (15K reviews)",
            img: "./images/19.jpeg",
            subServices: [
              { id: "cdl-1", name: "Magnet Repair / Install", rating: "4.85 (5K)", price: 149, img: "./images/Magnet Repair - Install.jpeg" },
              { id: "cdl-2", name: "Latch repair /install", rating: "4.80 (3K)", price: 199, img: "./images/Latch repair - install.jpeg" },
              { id: "cdl-3", name: "Drawer lock installation", rating: "4.83 (7K)", price: 249, img: "./images/Drawer lock installation.jpeg" },
              { id: "cdl-4", name: "Cupboard lock Installation", rating: "4.81 (5K)", price: 299, img: "./images/Cupboard lock Installation.jpeg" }
            ]
          },
          {
            title: "Door Hinges repair and replacement",
            rating: "4.82 (15K reviews)",
            img: "./images/20.jpeg",
            subServices: [
              { id: "dhrr-1", name: "Door Hinge Repair (per 1)", rating: "4.85 (5K)", price: 149, img: "./images/Door Hinge Repair (per 1).jpeg" },
              { id: "dhrr-2", name: "Door Hinge Replace (per 1)", rating: "4.80 (3K)", price: 199, img: "./images/Door Hinge Replace (per 1).jpeg" },
              { id: "dhrr-3", name: "Window hinge repair/install", rating: "4.83 (7K)", price: 249, img: "./images/Window hinge repair - install.jpeg" },
              { id: "dhrr-4", name: "Cupboard hinge repair (upto 2)", rating: "4.81 (5K)", price: 299, img: "./images/Cupboard hinge repair (upto 2).jpeg" }
            ]
          },
          {
            title: "Cupboard repair & Installation",
            rating: "4.82 (15K reviews)",
            img: "./images/21.jpeg",
            subServices: [
              { id: "cri-1", name: "Regular Channel repair", rating: "4.81 (5K)", price: 299, img: "./images/Regular Channel repair.jpeg" },
              { id: "cri-2", name: "Soft Close Channel repair", rating: "4.79 (3K)", price: 399, img: "./images/Soft Close Channel repair.jpeg" }
            ]
          }
        ]
      },
      {
        id: "curtain-window",
        title: "Curtain & window",
        subtitle: "Curtain rod, Mosquito net, Blinds, AC frames & Window repair",
        image: "./images/Curtain & window.jpeg",
        mainServices: [
          {
            title: "Curtain rod Installation",
            rating: "4.82 (12K reviews)",
            img: "./images/22.jpeg",
            subServices: [
              { id: "cur-1", name: "Curtain rod Installation", rating: "4.83 (12K)", price: 149, img: "./images/curtain rod installation.Jpeg" }
            ]
          },
          {
            title: "Mosquito net Installation",
            rating: "4.85 (18K reviews)",
            img: "./images/23.jpeg",
            subServices: [
              { id: "mos-1", name: "Small (2*3 feet)", rating: "4.86 (8K)", price: 299, img: "./images/small M.jpeg" },
              { id: "mos-2", name: "Medium (5*6 feet)", rating: "4.85 (7K)", price: 499, img: "./images/Medium.jpeg" },
              { id: "mos-3", name: "Large (7*8 feet)", rating: "4.84 (3K)", price: 799, img: "./images/Large M.jpeg" }
            ]
          },
          {
            title: "Blinds fitting inspection & measurement",
            rating: "4.79 (4K reviews)",
            img: "./images/24.jpeg",
            subServices: [
              { id: "bld-1", name: "Non motorised blinds fitting", rating: "4.80 (2K)", price: 199, img: "./images/non motorised blinds.jpeg" },
              { id: "bld-2", name: "Motorised blinds fitting", rating: "4.82 (1K)", price: 349, img: "./images/motorised blinds.jpeg" },
              { id: "bld-3", name: "Measurement for blinds", rating: "4.78 (1K)", price: 149, img: "./images/measurement for blinds.jpeg" }
            ]
          },
          {
            title: "Window accessories",
            rating: "4.81 (6K reviews)",
            img: "./images/25.jpeg",
            subServices: [
              { id: "wacc-1", name: "Window Hook", rating: "4.82 (2K)", price: 129, img: "./images/window hook.jpeg" },
              { id: "wacc-2", name: "Window Latch", rating: "4.81 (2K)", price: 129, img: "./images/window latch.jpeg" },
              { id: "wacc-3", name: "Window Handle", rating: "4.80 (2K)", price: 129, img: "./images/window handle.jpeg" }
            ]
          },
          {
            title: "Window AC frame Install / Uninstall",
            rating: "4.86 (9K reviews)",
            img: "./images/26.jpeg",
            subServices: [
              { id: "wac-1", name: "Window AC frame Installation", rating: "4.87 (6K)", price: 349, img: "./images/window ac frame installation.jpeg" },
              { id: "wac-2", name: "Window Closing (post AC removal)", rating: "4.84 (3K)", price: 299, img: "./images/window closing.jpeg" }
            ]
          },
          {
            title: "Window Misalignment/Jam repair",
            rating: "4.80 (7K reviews)",
            img: "./images/27.jpeg",
            subServices: [
              { id: "wjam-1", name: "Window hinge repair / replace", rating: "4.81 (4K)", price: 199, img: "./images/window hinge repair.jpeg" },
              { id: "wjam-2", name: "Misalignment issues", rating: "4.79 (3K)", price: 299, img: "./images/window misalignment.jpeg" }
            ]
          }
        ]
      },
      {
        id: "furniture-repair",
        title: "Furniture repair",
        subtitle: "Wooden bed, Chair, Table, Sofa repair & Buffers",
        image: "./images/Furniture repair.jpeg",
        mainServices: [
          {
            title: "Wooden bed repair",
            rating: "4.82 (14K reviews)",
            img: "./images/28.jpeg",
            subServices: [
              { id: "fbed-1", name: "Headboard repair", rating: "4.83 (8K)", price: 299, img: "./images/headboard repair.jpeg" },
              { id: "fbed-2", name: "Bed Support Repair", rating: "4.81 (6K)", price: 349, img: "./images/bed support repair.jpeg" }
            ]
          },
          {
            title: "Wooden Chair Repair",
            rating: "4.79 (9K reviews)",
            img: "./images/29.jpeg",
            subServices: [
              { id: "fchr-1", name: "Squeaky/wobbly chair repair", rating: "4.80 (9K)", price: 199, img: "./images/chair repair.jpeg" },
              { id: "fchr-2", name: "Balance", rating: "4.78 (7K)", price: 149, img: "./images/Balance.jpeg" }
            ]
          },
          {
            title: "Wooden Table Repair",
            rating: "4.81 (7K reviews)",
            img: "./images/30.jpeg",
            subServices: [
              { id: "ftbl-1", name: "Squeaky/wobbly table repair", rating: "4.82 (4K)", price: 229, img: "./images/table squeaky repair.jpeg" },
              { id: "ftbl-2", name: "Balance Issue", rating: "4.79 (3K)", price: 199, img: "./images/table balance issue.jpeg" }
            ]
          },
          {
            title: "Wooden Sofa Repair",
            rating: "4.85 (11K reviews)",
            img: "./images/31.jpeg",
            subServices: [
              { id: "fsof-1", name: "Squeaky/wobbly sofa repair", rating: "4.86 (6K)", price: 349, img: "./images/sofa squeaky repair.jpeg" },
              { id: "fsof-2", name: "Leg Repair", rating: "4.83 (5K)", price: 299, img: "./images/sofa leg repair.jpeg" }
            ]
          },
          {
            title: "Plastic buffer Installation",
            rating: "4.78 (5K reviews)",
            img: "./images/32.jpeg",
            subServices: [
              { id: "fbuf-1", name: "Chair Plastic Buffer", rating: "4.79 (3K)", price: 129, img: "./images/chair plastic buffer.jpeg" },
              { id: "fbuf-2", name: "Table plastic buffer", rating: "4.77 (2K)", price: 129, img: "./images/table plastic buffer.jpeg" }
            ]
          },
          {
            title: "Table/Chair Wheel Fitting",
            rating: "4.80 (8K reviews)",
            img: "./images/33.jpeg",
            subServices: [
              { id: "fwhe-1", name: "Table/Chair Wheel Fitting", rating: "4.80 (8K)", price: 149, img: "./images/wheel fitting.jpeg" }
            ]
          }
        ]
      },
      {
        id: "furniture-assembly",
        title: "Furniture Assembly",
        subtitle: "Beds, tables, cabinets, wardrobes & shoe racks",
        image: "./images/Furniture assembly.jpeg",
        mainServices: [
          {
            title: "Single bed Assembly",
            rating: "4.86 (15K reviews)",
            img: "./images/34.jpeg",
            subServices: [
              { id: "fas-1", name: "Without Storage", rating: "4.85 (8K)", price: 399, img: "./images/single bed without storage.jpeg" },
              { id: "fas-2", name: "With Storage", rating: "4.88 (7K)", price: 499, img: "./images/single bed with storage.jpeg" }
            ]
          },
          {
            title: "Double bed assembly",
            rating: "4.89 (20K reviews)",
            img: "./images/35.jpeg",
            subServices: [
              { id: "fad-1", name: "Without Storage", rating: "4.87 (10K)", price: 599, img: "./images/double bed without storage.jpeg" },
              { id: "fad-2", name: "With Storage", rating: "4.90 (10K)", price: 799, img: "./images/double bed with storage.jpeg" }
            ]
          },
          {
            title: "Hydraulic bed assembly",
            rating: "4.91 (12K reviews)",
            img: "./images/36.jpeg",
            subServices: [
              { id: "fah-1", name: "Single Bed", rating: "4.90 (5K)", price: 799, img: "./images/hydraulic single bed.jpeg" },
              { id: "fah-2", name: "Double Bed", rating: "4.92 (7K)", price: 999, img: "./images/hydraulic double bed.jpeg" }
            ]
          },
          {
            title: "Study table assembly",
            rating: "4.82 (8K reviews)",
            img: "./images/37.jpeg",
            subServices: [
              { id: "fast-1", name: "With Drawers", rating: "4.83 (5K)", price: 349, img: "./images/study table with drawers.jpeg" },
              { id: "fast-2", name: "Without Drawers", rating: "4.80 (3K)", price: 299, img: "./images/study table without drawers.jpeg" }
            ]
          },
          {
            title: "Coffee table assembly",
            rating: "4.81 (6K reviews)",
            img: "./images/38.jpeg",
            subServices: [
              { id: "fact-1", name: "Regular", rating: "4.82 (3K)", price: 299, img: "./images/coffee table regular.jpeg" },
              { id: "fact-2", name: "Foldable", rating: "4.80 (2K)", price: 349, img: "./images/coffee table foldable.jpeg" },
              { id: "fact-3", name: "Nest of tables", rating: "4.83 (1K)", price: 399, img: "./images/nest of tables.jpeg" }
            ]
          },
          {
            title: "Cabinet assembly",
            rating: "4.84 (9K reviews)",
            img: "./images/39.jpeg",
            subServices: [
              { id: "facab-1", name: "1 Door", rating: "4.82 (2K)", price: 399, img: "./images/cabinet 1 door.jpeg" },
              { id: "facab-2", name: "2 Doors", rating: "4.84 (3K)", price: 599, img: "./images/cabinet 2 doors.jpeg" },
              { id: "facab-3", name: "3 Doors", rating: "4.85 (2K)", price: 799, img: "./images/cabinet 3 doors.jpeg" },
              { id: "facab-4", name: "Glass Door", rating: "4.87 (2K)", price: 899, img: "./images/cabinet glass door.jpeg" }
            ]
          },
          {
            title: "Shelving unit assembly & installation",
            rating: "4.83 (7K reviews)",
            img: "./images/40.jpeg",
            subServices: [
              { id: "fasu-1", name: "Shelving Unit", rating: "4.81 (2K)", price: 349, img: "./images/shelving unit.jpeg" },
              { id: "fasu-2", name: "Upto 4 Shelves", rating: "4.84 (3K)", price: 449, img: "./images/upto 4 shelves.jpeg" },
              { id: "fasu-3", name: "Upto 16 Shelves", rating: "4.86 (2K)", price: 899, img: "./images/upto 16 shelves.jpeg" }
            ]
          },
          {
            title: "Mandir assembly & installation",
            rating: "4.92 (5K reviews)",
            img: "./images/41.jpeg",
            subServices: [
              { id: "fam-1", name: "Mandir assembly & installation", rating: "4.92 (5K)", price: 499, img: "./images/mandir assembly.jpeg" }
            ]
          },
          {
            title: "Double door wardrobe assembly",
            rating: "4.88 (11K reviews)",
            img: "./images/42.jpeg",
            subServices: [
              { id: "fadw-1", name: "Double door wardrobe assembly", rating: "4.88 (11K)", price: 899, img: "./images/double door wardrobe.jpeg" }
            ]
          },
          {
            title: "Three door wardrobe assembly",
            rating: "4.89 (8K reviews)",
            img: "./images/43.jpeg",
            subServices: [
              { id: "fatw-1", name: "Three door wardrobe assembly", rating: "4.89 (8K)", price: 1199, img: "./images/three door wardrobe.jpeg" }
            ]
          },
          {
            title: "Office chair assembly",
            rating: "4.80 (10K reviews)",
            img: "./images/44.jpeg",
            subServices: [
              { id: "faoc-1", name: "Without Wheels", rating: "4.78 (3K)", price: 249, img: "./images/office chair without wheels.jpeg" },
              { id: "faoc-2", name: "Hydraulic With arm Support", rating: "4.82 (5K)", price: 349, img: "./images/office chair hydraulic arm.jpeg" },
              { id: "faoc-3", name: "Hydraulic Without arm Support", rating: "4.80 (2K)", price: 299, img: "./images/office chair hydraulic no arm.jpeg" }
            ]
          },
          {
            title: "Book shelf/bookcase assembly & installation",
            rating: "4.83 (6K reviews)",
            img: "./images/45.jpeg",
            subServices: [
              { id: "fabs-1", name: "Single Shelf", rating: "4.81 (1K)", price: 199, img: "./images/bookshelf single.jpeg" },
              { id: "fabs-2", name: "3 Shelfs", rating: "4.82 (2K)", price: 349, img: "./images/bookshelf 3 shelves.jpeg" },
              { id: "fabs-3", name: "6 Shelfs", rating: "4.84 (2K)", price: 549, img: "./images/bookshelf 6 shelves.jpeg" },
              { id: "fabs-4", name: "9 Shelfs", rating: "4.85 (500)", price: 749, img: "./images/bookshelf 9 shelves.jpeg" },
              { id: "fabs-5", name: "12 Shelfs", rating: "4.87 (500)", price: 999, img: "./images/bookshelf 12 shelves.jpeg" }
            ]
          },
          {
            title: "Cot assembly",
            rating: "4.85 (9K reviews)",
            img: "./images/46.jpeg",
            subServices: [
              { id: "facot-1", name: "Cot assembly", rating: "4.85 (9K)", price: 499, img: "./images/cot assembly.jpeg" }
            ]
          },
          {
            title: "Single door wardrobe assembly",
            rating: "4.81 (4K reviews)",
            img: "./images/47.jpeg",
            subServices: [
              { id: "fasdw-1", name: "Single door wardrobe assembly", rating: "4.81 (4K)", price: 599, img: "./images/single door wardrobe.jpeg" }
            ]
          },
          {
            title: "Table/chair wheel fitting",
            rating: "4.79 (5K reviews)",
            img: "./images/48.jpeg",
            subServices: [
              { id: "fatcw-1", name: "Table/chair wheel fitting", rating: "4.79 (5K)", price: 149, img: "./images/table chair wheel.jpeg" }
            ]
          },
          {
            title: "Four door wardrobe assembly",
            rating: "4.90 (6K reviews)",
            img: "./images/49.jpeg",
            subServices: [
              { id: "fafd-1", name: "Four door wardrobe assembly", rating: "4.90 (6K)", price: 1499, img: "./images/four door wardrobe.jpeg" }
            ]
          },
          {
            title: "Shoe rack assembly",
            rating: "4.82 (7K reviews)",
            img: "./images/50.jpeg",
            subServices: [
              { id: "fasr-1", name: "Regular", rating: "4.81 (4K)", price: 299, img: "./images/shoe rack regular.jpeg" },
              { id: "fasr-2", name: "Till out", rating: "4.84 (3K)", price: 399, img: "./images/shoe rack till out.jpeg" }
            ]
          },
          {
            title: "Standing table assembly",
            rating: "4.84 (3K reviews)",
            img: "./images/51.jpeg",
            subServices: [
              { id: "fastab-1", name: "Standing table assembly", rating: "4.84 (3K)", price: 499, img: "./images/standing table.jpeg" }
            ]
          },
          {
            title: "Shoe cabinet assembly",
            rating: "4.86 (8K reviews)",
            img: "./images/52.jpeg",
            subServices: [
              { id: "fasc-1", name: "2 Compartments", rating: "4.83 (2K)", price: 399, img: "./images/shoe cabinet 2 comp.jpeg" },
              { id: "fasc-2", name: "3 Compartments", rating: "4.85 (3K)", price: 549, img: "./images/shoe cabinet 3 comp.jpeg" },
              { id: "fasc-3", name: "4 Compartments", rating: "4.87 (2K)", price: 699, img: "./images/shoe cabinet 4 comp.jpeg" },
              { id: "fasc-4", name: "4+ Compartments", rating: "4.89 (1K)", price: 899, img: "./images/shoe cabinet 4plus comp.jpeg" }
            ]
          }
        ]
      },
      {
        id: "kitchen-fittings",
        title: "Kitchen fittings",
        subtitle: "Drawer & cabinet, Utensil rack & Shelf installation",
        image: "./images/Kitchen fittings.jpeg",
        mainServices: [
          {
            title: "Drawer & cabinet",
            rating: "4.84 (11K reviews)",
            img: "./images/53.jpeg",
            subServices: [
              { id: "kit-1", name: "Cabinet Hydraulic repair", rating: "4.82 (4K)", price: 299, img: "./images/cabinet hydraulic repair.jpeg" },
              { id: "kit-2", name: "Hinge repair/Replace (upto 2)", rating: "4.85 (5K)", price: 249, img: "./images/hinge repair replace.jpeg" },
              { id: "kit-3", name: "Regular Channel repair", rating: "4.81 (3K)", price: 199, img: "./images/Regular channel repair.jpeg" },
              { id: "kit-4", name: "Soft close channel repair", rating: "4.87 (6K)", price: 299, img: "./images/soft close channel repair.jpeg" }
            ]
          },
          {
            title: "Utensil rack installation",
            rating: "4.86 (8K reviews)",
            img: "./images/54.jpeg",
            subServices: [
              { id: "kit-5", name: "Utensil rack installation", rating: "4.86 (8K)", price: 249, img: "./images/utensil rack installation.jpeg" }
            ]
          },
          {
            title: "Shelf installation",
            rating: "4.83 (9K reviews)",
            img: "./images/55.jpeg",
            subServices: [
              { id: "kit-6", name: "Wooden Shelf", rating: "4.82 (5K)", price: 199, img: "./images/wooden shelf.jpeg" },
              { id: "kit-7", name: "Glass Floating Shelf", rating: "4.85 (4K)", price: 249, img: "./images/glass floating shelf.jpeg" }
            ]
          }
        ]
      },
      {
        id: "bath-fittings",
        title: "Bath fittings & mirrors",
        subtitle: "Mirror installation, cabinets, soap holders & towel racks",
        image: "./images/Bath fittings & mirrors.jpeg",
        mainServices: [
          {
            title: "Mirror installation",
            rating: "4.88 (14K reviews)",
            img: "./images/56.jpeg",
            subServices: [
              { id: "bath-1", name: "Small (Upto 2ft & 3ft)", rating: "4.87 (8K)", price: 199, img: "./images/mirror-small.jpeg" },
              { id: "bath-2", name: "Large (Upto 2ft & 6ft)", rating: "4.90 (6K)", price: 299, img: "./images/mirror-large.jpeg" }
            ]
          },
          {
            title: "Bathroom mirror cabinet installation",
            rating: "4.85 (7K reviews)",
            img: "./images/57.jpeg",
            subServices: [
              { id: "bath-3", name: "With 1 Door", rating: "4.84 (4K)", price: 299, img: "./images/With 1 Door.jpeg" },
              { id: "bath-4", name: "With 2 Door", rating: "4.87 (3K)", price: 399, img: "./images/With 2 Door.jpeg" }
            ]
          },
          {
            title: "Soap holder installation",
            rating: "4.80 (5K reviews)",
            img: "./images/58.jpeg",
            subServices: [
              { id: "bath-5", name: "Soap holder installation", rating: "4.80 (5K)", price: 149, img: "./images/soap holder installation.jpeg" }
            ]
          },
          {
            title: "Bath accessories installation",
            rating: "4.82 (10K reviews)",
            img: "./images/59.jpeg",
            subServices: [
              { id: "bath-6", name: "Soap Holder", rating: "4.81 (3K)", price: 129, img: "./images/soap holder.jpeg" },
              { id: "bath-7", name: "Small Holder", rating: "4.80 (2K)", price: 129, img: "./images/small holder.jpeg" },
              { id: "bath-8", name: "Holding rod", rating: "4.83 (3K)", price: 149, img: "./images/holding rod.jpeg" },
              { id: "bath-9", name: "Towel Rack", rating: "4.85 (4K)", price: 199, img: "./images/towel rack.jpeg" }
            ]
          }
        ]
      },
      {
        id: "balcony-fittings",
        title: "Balcony fittings",
        subtitle: "Clothes hanger, drying rope & ceiling hooks",
        image: "./images/Balcony fittings.jpeg",
        mainServices: [
          {
            title: "Clothes hanger installation",
            rating: "4.89 (16K reviews)",
            img: "./images/60.jpeg",
            subServices: [
              { id: "bal-1", name: "Wall Hanger Installation", rating: "4.87 (6K)", price: 499, img: "./images/wall hanger installation.jpeg" },
              { id: "bal-2", name: "Ceiling-mounted (fixed frame)", rating: "4.90 (7K)", price: 599, img: "./images/ceiling mounted fixed.jpeg" },
              { id: "bal-3", name: "Ceiling-mounted (Modular frame)", rating: "4.92 (3K)", price: 699, img: "./images/ceiling mounted modular.jpeg" }
            ]
          },
          {
            title: "Cloth drying rope installation",
            rating: "4.81 (6K reviews)",
            img: "./images/61.jpeg",
            subServices: [
              { id: "bal-4", name: "Cloth drying rope installation", rating: "4.81 (6K)", price: 149, img: "./images/cloth drying rope.jpeg" }
            ]
          },
          {
            title: "Ceiling Hook/Fastener Installation",
            rating: "4.84 (8K reviews)",
            img: "./images/62.jpeg",
            subServices: [
              { id: "bal-5", name: "Ceiling Hook/Fastener Installation", rating: "4.84 (8K)", price: 149, img: "./images/ceiling-hook.jpeg" }
            ]
          }
        ]
      },
      {
        id: "at-home-consultation",
        title: "At home consultation",
        subtitle: "Book a professional carpenter for custom woodworking",
        image: "./images/At home consultation.PNG",
        mainServices: [
          {
            title: "Book a carpenter",
            rating: "4.95 (25K reviews)",
            img: "./images/At home consultation.PNG",
            subServices: [
              { id: "con-1", name: "Book a carpenter", rating: "4.95 (25K)", price: 99, img: "./images/At home consultation.PNG" }
            ]
          }
        ]
      }
    ];

    const electricianCategories = [
      {
        id: "switch-socket",
        title: "Switch & socket",
        subtitle: "New switchbox / switchboard installation",
        image: "./images/electrician_switch.jpeg",
        mainServices: [
          {
            title: "New switchbox / switchboard installation",
            rating: "4.82 (15K reviews)",
            img: "./images/electrician_switchbox.jpeg",
            subServices: [
              { id: "esw-1", name: "Small (Upto 2 Modules)", rating: "4.85 (5K)", price: 149, img: "./images/esw_small.jpeg" },
              { id: "esw-2", name: "2 Switches", rating: "4.80 (3K)", price: 199, img: "./images/esw_2switches.jpeg" },
              { id: "esw-3", name: "Large (Upto 6+ Regular Modules)", rating: "4.83 (7K)", price: 299, img: "./images/esw_large.jpeg" },
              { id: "esw-4", name: "Power AC Switch Box (small)", rating: "4.81 (5K)", price: 349, img: "./images/esw_ac.jpeg" }
            ]
          }
        ]
      },
      {
        id: "fan",
        title: "Fan",
        subtitle: "Fan repair, ceiling, decorative & BLDC fan installation",
        image: "./images/electrician_fan.jpeg",
        mainServices: [
          {
            title: "Fan repair",
            rating: "4.78 (12K reviews)",
            img: "./images/fan_repair.jpeg",
            subServices: [
              { id: "efan-1", name: "Noise", rating: "4.76 (4K)", price: 149, img: "./images/fan_noise.jpeg" },
              { id: "efan-2", name: "Slow Speed", rating: "4.79 (5K)", price: 179, img: "./images/fan_slow.jpeg" },
              { id: "efan-3", name: "Blades not Spinning", rating: "4.80 (3K)", price: 199, img: "./images/fan_spinning.jpeg" }
            ]
          },
          {
            title: "Regular ceiling fan installation",
            rating: "4.85 (20K reviews)",
            img: "./images/regular_fan.jpeg",
            subServices: [
              { id: "ercf-1", name: "Installation", rating: "4.86 (10K)", price: 179, img: "./images/fan_install.jpeg" },
              { id: "ercf-2", name: "Replacement", rating: "4.84 (7K)", price: 219, img: "./images/fan_replace.jpeg" },
              { id: "ercf-3", name: "Uninstallation", rating: "4.82 (3K)", price: 99, img: "./images/fan_uninstall.jpeg" }
            ]
          },
          {
            title: "Decorative fan installation",
            rating: "4.88 (8K reviews)",
            img: "./images/decorative_fan.jpeg",
            subServices: [
              { id: "edf-1", name: "Installation", rating: "4.89 (4K)", price: 299, img: "./images/fan_installing.jpeg" },
              { id: "edf-2", name: "Replacement", rating: "4.87 (3K)", price: 349, img: "./images/fan_replaced.jpeg" },
              { id: "edf-3", name: "Uninstallation", rating: "4.80 (1K)", price: 149, img: "./images/fan_uninstalling.jpeg" }
            ]
          },
          {
            title: "Smart/BLDC fan installation",
            rating: "4.90 (6K reviews)",
            img: "./images/bldc_fan.jpeg",
            subServices: [
              { id: "ebldc-1", name: "Installation", rating: "4.91 (3K)", price: 249, img: "./images/fan_install 1.jpeg" },
              { id: "ebldc-2", name: "Replacement", rating: "4.89 (2K)", price: 299, img: "./images/fan_replace 2.jpeg" },
              { id: "ebldc-3", name: "Uninstallation", rating: "4.85 (1K)", price: 129, img: "./images/fan_uninstall 3.jpeg" }
            ]
          },
          {
            title: "Exhaust/pedestal/tower fan installation",
            rating: "4.81 (5K reviews)",
            img: "./images/exhaust_fan.jpeg",
            subServices: [
              { id: "eex-1", name: "Installation", rating: "4.82 (3K)", price: 179, img: "./images/fan_install 4.jpeg" },
              { id: "eex-2", name: "Replacement", rating: "4.81 (1.5K)", price: 219, img: "./images/fan_replace 5.jpeg" },
              { id: "eex-3", name: "Uninstallation", rating: "4.79 (500)", price: 99, img: "./images/fan_uninstall 6.jpeg" }
            ]
          },
          {
            title: "Fan regulator replacement",
            rating: "4.83 (4K reviews)",
            img: "./images/regulator.jpeg",
            subServices: [
              { id: "ereg-1", name: "Fan regulator replacement", rating: "4.83 (4K)", price: 149, img: "./images/regulator.jpeg" }
            ]
          }
        ]
      },
      {
        id: "light",
        title: "Light",
        subtitle: "Fancy lights, Tubelights, Bulbs, Ceiling & Chandelier lights",
        image: "./images/electrician_light.jpeg",
        mainServices: [
          {
            title: "Fancy light installation/replacement",
            rating: "4.86 (9K reviews)",
            img: "./images/fancy_light.jpeg",
            subServices: [
              { id: "flt-1", name: "Fancy light installation/replacement", rating: "4.86 (9K)", price: 249, img: "./images/fancy_light.jpeg" }
            ]
          },
          {
            title: "Tubelight Installation / Replacement",
            rating: "4.82 (11K reviews)",
            img: "./images/tubelight.jpeg",
            subServices: [
              { id: "tbl-1", name: "Tubelight Installation / Replacement", rating: "4.82 (11K)", price: 129, img: "./images/tubelight.jpeg" }
            ]
          },
          {
            title: "Bulb installation/replacement",
            rating: "4.80 (7K reviews)",
            img: "./images/bulb.jpeg",
            subServices: [
              { id: "bulb-1", name: "Only Bulb", rating: "4.81 (3K)", price: 99, img: "./images/only bulb.jpeg" },
              { id: "bulb-2", name: "Only Bulb Holder", rating: "4.79 (2K)", price: 99, img: "./images/bulb holder.jpeg" },
              { id: "bulb-3", name: "Bulb & Holder", rating: "4.82 (2K)", price: 149, img: "./images/bulb_holder.jpeg" }
            ]
          },
          {
            title: "Ceiling light installation",
            rating: "4.85 (10K reviews)",
            img: "./images/ceiling_light.jpeg",
            subServices: [
              { id: "clt-1", name: "Panel lights (False Ceiling)", rating: "4.86 (6K)", price: 179, img: "./images/panel_false.jpeg" },
              { id: "clt-2", name: "Panel lights (Mounted On…)", rating: "4.84 (4K)", price: 179, img: "./images/panel_mounted.jpeg" }
            ]
          },
          {
            title: "Hanging light installation",
            rating: "4.88 (5K reviews)",
            img: "./images/hanging_light.jpeg",
            subServices: [
              { id: "hlt-1", name: "Hanging light installation", rating: "4.88 (5K)", price: 299, img: "./images/hanging_light.jpeg" }
            ]
          },
          {
            title: "Chandelier installation",
            rating: "4.92 (3K reviews)",
            img: "./images/chandelier.jpeg",
            subServices: [
              { id: "chan-1", name: "Small", rating: "4.90 (1K)", price: 499, img: "./images/chandelier 1.jpeg" },
              { id: "chan-2", name: "Small (Single-tire / upto 6 lights)", rating: "4.91 (1K)", price: 699, img: "./images/chandelier 2.jpeg" },
              { id: "chan-3", name: "Medium (Single-tire / upto 6+ lights)", rating: "4.93 (700)", price: 999, img: "./images/chandelier 3.jpeg" },
              { id: "chan-4", name: "Extra Large (30+ Kg)", rating: "4.95 (300)", price: 1499, img: "./images/chandelier 4.jpeg" }
            ]
          }
        ]
      },
      {
        id: "wiring",
        title: "Wiring",
        subtitle: "New internal wiring services",
        image: "./images/electrician_wiring.jpeg",
        mainServices: [
          {
            title: "New internal wiring (per 5m)",
            rating: "4.81 (4K reviews)",
            img: "./images/wiring.jpeg",
            subServices: [
              { id: "wir-1", name: "With Casing", rating: "4.82 (2.5K)", price: 349, img: "./images/wiring_casing.jpeg" },
              { id: "wir-2", name: "Without Casing", rating: "4.80 (1.5K)", price: 299, img: "./images/wiring_without.jpeg" }
            ]
          }
        ]
      },
      {
        id: "doorbell-security",
        title: "Doorbell & security",
        subtitle: "Regular doorbell, Video doorbell & Wireless CCTV installation",
        image: "./images/electrician_security.jpeg",
        mainServices: [
          {
            title: "Regular doorbell installation",
            rating: "4.84 (8K reviews)",
            img: "./images/doorbell.jpeg",
            subServices: [
              { id: "db-1", name: "Installation", rating: "4.85 (5K)", price: 149, img: "./images/doorbell 1.jpeg" },
              { id: "db-2", name: "Replace", rating: "4.83 (3K)", price: 179, img: "./images/doorbell 2.jpeg" }
            ]
          },
          {
            title: "Video doorbell installation",
            rating: "4.89 (4K reviews)",
            img: "./images/video_doorbell.jpeg",
            subServices: [
              { id: "vdb-1", name: "Installation", rating: "4.90 (2.5K)", price: 399, img: "./images/video_doorbell 1.jpeg" },
              { id: "vdb-2", name: "Replacement", rating: "4.88 (1.5K)", price: 449, img: "./images/video_doorbell 2.jpeg" }
            ]
          },
          {
            title: "Wireless CCTV installation",
            rating: "4.91 (6K reviews)",
            img: "./images/cctv.jpeg",
            subServices: [
              { id: "cctv-1", name: "Wireless CCTV installation", rating: "4.91 (6K)", price: 499, img: "./images/cctv.jpeg" }
            ]
          }
        ]
      },
      {
        id: "mcb-fuse",
        title: "MCB/fuse",
        subtitle: "MCB/Fuse repair, Submeter & Changeover switch installation",
        image: "./images/electrician_mcb.jpeg",
        mainServices: [
          {
            title: "MCB / Fuse Repair or Replacement",
            rating: "4.82 (10K reviews)",
            img: "./images/mcb.jpeg",
            subServices: [
              { id: "mcb-1", name: "Fuse Repair", rating: "4.80 (3K)", price: 199, img: "./images/fuse_repair.jpeg" },
              { id: "mcb-2", name: "1 Switch (Install/Replace)", rating: "4.82 (3K)", price: 149, img: "./images/mcb_switch 1.jpeg" },
              { id: "mcb-3", name: "2 Switch (Install/Replace)", rating: "4.83 (2K)", price: 229, img: "./images/mcb_switch 2.jpeg" },
              { id: "mcb-4", name: "3 Switch (Install/Replace)", rating: "4.84 (1K)", price: 299, img: "./images/mcb_switch 3.jpeg" },
              { id: "mcb-5", name: "4 Switch (Install/Replace)", rating: "4.85 (1K)", price: 379, img: "./images/mcb_switch 4.jpeg" }
            ]
          },
          {
            title: "Submeter installation",
            rating: "4.86 (5K reviews)",
            img: "./images/submeter.jpeg",
            subServices: [
              { id: "sub-1", name: "1 phase Sub Meter Installation", rating: "4.87 (3K)", price: 349, img: "./images/submeter 1.jpeg" },
              { id: "sub-2", name: "3 phase Sub Meter Installation", rating: "4.85 (2K)", price: 499, img: "./images/submeter 2.jpeg" }
            ]
          },
          {
            title: "3-phase changeover switch installation",
            rating: "4.88 (2K reviews)",
            img: "./images/changeover.jpeg",
            subServices: [
              { id: "co-1", name: "3-phase changeover switch installation", rating: "4.88 (2K)", price: 599, img: "./images/changeover.jpeg" }
            ]
          }
        ]
      },
      {
        id: "appliances",
        title: "Appliances",
        subtitle: "Home theatre, TV installation, Inverters & Sound bar",
        image: "./images/electrician_appliances.jpeg",
        mainServices: [
          {
            title: "Home theatre installation",
            rating: "4.87 (4K reviews)",
            img: "./images/hometheatre.jpeg",
            subServices: [
              { id: "app-1", name: "Home theatre installation", rating: "4.87 (4K)", price: 399, img: "./images/hometheatre.jpeg" }
            ]
          },
          {
            title: "TV installation",
            rating: "4.90 (18K reviews)",
            img: "./images/tv_install.jpeg",
            subServices: [
              { id: "tv-1", name: "Upto 26 Inch", rating: "4.88 (3K)", price: 299, img: "./images/tv_install 1.jpeg" },
              { id: "tv-2", name: "32 – 43 Inch", rating: "4.90 (8K)", price: 349, img: "./images/tv_install 1.jpeg" },
              { id: "tv-3", name: "46 – 55 Inch", rating: "4.92 (5K)", price: 449, img: "./images/tv_install 1.jpeg" },
              { id: "tv-4", name: "56 – 65 Inch", rating: "4.93 (1.5K)", price: 599, img: "./images/tv_install 1.jpeg" },
              { id: "tv-5", name: "Over 75 Inch", rating: "4.95 (500)", price: 899, img: "./images/tv_install 1.jpeg" }
            ]
          },
          {
            title: "TV uninstallation",
            rating: "4.83 (6K reviews)",
            img: "./images/tv_uninstall.jpeg",
            subServices: [
              { id: "tvu-1", name: "Below 46 inch", rating: "4.82 (2K)", price: 199, img: "./images/tv_uninstall 1.jpeg" },
              { id: "tvu-2", name: "46 – 55 Inch", rating: "4.84 (2K)", price: 249, img: "./images/tv_uninstall 1.jpeg" },
              { id: "tvu-3", name: "56 – 65 Inch", rating: "4.85 (1.5K)", price: 299, img: "./images/tv_uninstall 1.jpeg" },
              { id: "tvu-4", name: "Over 75 Inch", rating: "4.88 (500)", price: 399, img: "./images/tv_uninstall 1.jpeg" }
            ]
          },
          {
            title: "Sound bar installation",
            rating: "4.85 (5K reviews)",
            img: "./images/soundbar.jpeg",
            subServices: [
              { id: "sb-1", name: "Sound bar installation", rating: "4.85 (5K)", price: 249, img: "./images/soundbar.jpeg" }
            ]
          },
          {
            title: "Karban Airzone installation",
            rating: "4.81 (1K reviews)",
            img: "./images/airzone.jpeg",
            subServices: [
              { id: "kb-1", name: "Airzone", rating: "4.81 (1K)", price: 349, img: "./images/airzone.jpeg" }
            ]
          },
          {
            title: "Inverter installation",
            rating: "4.89 (7K reviews)",
            img: "./images/inverter.jpeg",
            subServices: [
              { id: "inv-1", name: "Installation (Single Battery)", rating: "4.88 (4K)", price: 399, img: "./images/inverter 1.jpeg" },
              { id: "inv-2", name: "Installation (Double Battery)", rating: "4.90 (3K)", price: 599, img: "./images/inverter 2.jpeg" }
            ]
          },
          {
            title: "Inverter fuse replacement",
            rating: "4.82 (3K reviews)",
            img: "./images/inverter_fuse.jpeg",
            subServices: [
              { id: "inf-1", name: "Inverter fuse replacement", rating: "4.82 (3K)", price: 199, img: "./images/inverter_fuse.jpeg" }
            ]
          },
          {
            title: "Inverter servicing",
            rating: "4.86 (4K reviews)",
            img: "./images/inverter_service.jpeg",
            subServices: [
              { id: "ins-1", name: "Inverter servicing", rating: "4.86 (4K)", price: 349, img: "./images/inverter_service.jpeg" }
            ]
          },
          {
            title: "Inverter check-up",
            rating: "4.80 (2K reviews)",
            img: "./images/inverter_check.jpeg",
            subServices: [
              { id: "inc-1", name: "Inverter check-up", rating: "4.80 (2K)", price: 149, img: "./images/inverter_check.jpeg" }
            ]
          },
          {
            title: "Inverter uninstallation",
            rating: "4.83 (2K reviews)",
            img: "./images/inverter_uninstall.jpeg",
            subServices: [
              { id: "inu-1", name: "Inverter uninstallation", rating: "4.83 (2K)", price: 249, img: "./images/inverter_uninstall.jpeg" }
            ]
          }
        ]
      }
    ];