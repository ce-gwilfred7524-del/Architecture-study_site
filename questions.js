const CA_STUDY_DATA = {
  course: {
    name: "Computer Architecture",
    code: "CE/IS 271",
    university: "University of Mines and Technology",
    lecturer: "Dr. Lecturer",
    year: "2025"
  },

  sections: [

    // ===================== SECTION A: COMPUTER ORGANISATION & FLYNN'S TAXONOMY =====================
    {
      id: "sec-a",
      title: "Section A — Computer Organisation & Flynn's Taxonomy",
      color: "#6366f1",
      icon: "🧠",
      description: "SISD, SIMD, MISD, MIMD — parallel architectures and machine organisation",
      questions: [
        {
          id: "sa1",
          type: "theory",
          question: "What is Flynn's Taxonomy? Why is it used in computer architecture?",
          answer: "Flynn's Taxonomy is a classification system for computer architectures based on the number of concurrent instruction streams and data streams. It was introduced by Michael J. Flynn in 1966.\n\nIt is used to categorise computer architectures into four classes:\n1. SISD — Single Instruction, Single Data\n2. SIMD — Single Instruction, Multiple Data\n3. MISD — Multiple Instruction, Single Data\n4. MIMD — Multiple Instruction, Multiple Data\n\nIt helps designers and engineers choose the right architecture for a given computing task, especially for parallel processing systems."
        },
        {
          id: "sa2",
          type: "mcq",
          question: "Parallel systems are multiprocessor systems, also known as ___.",
          options: ["A. tightly coupled systems", "B. integral systems", "C. differential systems", "D. open system", "E. None"],
          answer: "A",
          explanation: "Parallel/multiprocessor systems are called tightly coupled systems because processors share memory and communicate via shared memory — they are physically close and tightly integrated."
        },
        {
          id: "sa3",
          type: "mcq",
          question: "Which of the following is true about the SISD (Single Instruction Stream Single Data Stream) machine organisation?\n(i) Only one instruction stream is being acted on by the CPU during any one clock cycle\n(ii) Only one data stream is being used as input during any one clock cycle\n(iii) Instructions are executed sequentially but may be overlapped in their execution stages",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements correctly describe SISD — the traditional uniprocessor (Von Neumann) machine. One instruction at a time, one data stream, executed sequentially but possibly pipelined."
        },
        {
          id: "sa4",
          type: "mcq",
          question: "Which of the following is true about the SIMD (Single Instruction Stream Multiple Data Stream) machine organisation?\n(i) All processing units execute the same instruction at any given clock cycle\n(ii) Each processing unit can operate on a different data element\n(iii) All processing elements receive the same instruction broadcast from the control unit but operate on different data sets from distinct data streams",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements are correct for SIMD. One control unit broadcasts the same instruction to all processing units, but each unit works on a different data element. Used in vector processors and GPUs."
        },
        {
          id: "sa5",
          type: "mcq",
          question: "Which of the following is true about the MISD (Multiple Instruction Stream Single Data Stream) machine organisation?\n(i) Each processing unit operates on the data independently via separate instruction streams\n(ii) A single data stream is fed into multiple processing units\n(iii) The results (output) of one processor become the input (operands) of the next processor in the macro pipe",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements correctly describe MISD. Multiple processors each with separate instructions work on a single data stream in a pipeline-like fashion — output of one becomes input of the next."
        },
        {
          id: "sa6",
          type: "mcq",
          question: "Which of the following is true about the MIMD (Multiple Instruction Stream Multiple Data Stream) machine organisation?\n(i) Every processor may be executing a different instruction stream\n(ii) Every processor may be working with a different data stream\n(iii) Execution can be synchronous or asynchronous, deterministic or non-deterministic",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three are true for MIMD — the most powerful and most common parallel architecture today. Each processor has its own instructions and data. Modern multicore systems and clusters are MIMD."
        },
        {
          id: "sa7",
          type: "theory",
          question: "What is the Von Neumann Architecture? Which Flynn class does it belong to?",
          answer: "The Von Neumann Architecture (also called the stored-program concept) is the foundational model of most modern computers, proposed by John von Neumann in 1945.\n\nKey features:\n• A single unified memory stores both program instructions and data\n• A Central Processing Unit (CPU) fetches and executes instructions\n• Instructions are executed sequentially (one at a time)\n• Components: CPU, Memory Unit, Input Unit, Output Unit\n• A single bus connects the CPU to memory (the 'Von Neumann bottleneck')\n\nFlynn Classification: SISD (Single Instruction, Single Data) — one instruction stream and one data stream.\n\nLimitation: The Von Neumann bottleneck — data and instructions share the same bus, limiting throughput."
        },
        {
          id: "sa8",
          type: "mcq",
          question: "The Von Neumann architecture is which of the following Flynn classes?",
          options: ["A. SISD", "B. SIMD", "C. MIMD", "D. MISD", "E. None"],
          answer: "A",
          explanation: "Von Neumann architecture is a classic SISD machine — one instruction stream, one data stream, executed sequentially. This is the standard uniprocessor design."
        },
        {
          id: "sa9",
          type: "theory",
          question: "What is Computer Architecture? Distinguish it from Computer Organisation.",
          answer: "Computer Architecture:\n• The science and art of selecting and interconnecting hardware components to create computers that meet functional, performance, and cost goals\n• Deals with WHAT the system does — the programmer's view (instruction set, registers, memory addressing)\n• Purpose: Design a computer that maximises performance while keeping power consumption in check, costs low, and is very reliable\n\nComputer Organisation:\n• Deals with HOW the architecture is implemented\n• Concerns the physical hardware: control signals, memory technology, circuit design\n• Two computers can have the same architecture but different organisations\n\nExample: IBM System/370 — different models shared the same architecture (ISA) but had different internal organisations (speed, cost, power)."
        },
        {
          id: "sa10",
          type: "mcq",
          question: "Which of the following is true about Computer Architecture?\n(i) Computer Architecture is the science and art of selecting and interconnecting hardware components to create computers that meet functional, performance and cost goals\n(ii) The purpose is to design a computer that maximises performance while keeping power consumption in check, costs low relative to the amount of expected performance, and is also very reliable",
          options: ["A. Only (i) is true", "B. Only (ii) is true", "C. Both (i) and (ii) are true", "D. Neither is true", "E. None of the above"],
          answer: "C",
          explanation: "Both statements accurately and completely describe Computer Architecture — selecting/interconnecting hardware to meet goals, and balancing performance, power, cost, and reliability."
        },
        {
          id: "sa11",
          type: "mcq",
          question: "Which of the following is a type of computer architecture?",
          options: ["A. Microarchitecture", "B. Harvard Architecture", "C. Von-Neumann Architecture", "D. All of the mentioned", "E. None of the above"],
          answer: "D",
          explanation: "All three — Microarchitecture, Harvard Architecture, and Von-Neumann Architecture — are valid types/levels of computer architecture."
        },
        {
          id: "sa12",
          type: "theory",
          question: "Explain the Harvard Architecture. How does it differ from Von Neumann Architecture?",
          answer: "Harvard Architecture uses separate memory and buses for instructions and data.\n\nKey Features:\n• Separate instruction memory and data memory\n• Separate buses for instructions and data — allows simultaneous access\n• Faster because instruction fetch and data access can happen at the same time\n• Used in: Microcontrollers (AVR, PIC), DSPs, some modern CPUs use 'Modified Harvard' (separate L1 caches)\n\nDifference from Von Neumann:\n• Von Neumann: One shared memory, one shared bus → Von Neumann bottleneck\n• Harvard: Separate memories and buses → no bottleneck, higher throughput\n• Harvard is more complex and costly; Von Neumann is simpler and cheaper"
        }
      ]
    },

    // ===================== SECTION B: CPU ARCHITECTURE & MULTI-CORE PROCESSORS =====================
    {
      id: "sec-b",
      title: "Section B — CPU Architecture & Multi-Core Processors",
      color: "#10b981",
      icon: "⚡",
      description: "CPU functions, core types (Single, Dual, Quad, Hexa, Octa, Deca), and OS fundamentals",
      questions: [
        {
          id: "sb1",
          type: "theory",
          question: "What are the primary functions of the Central Processing Unit (CPU)?",
          answer: "The primary functions of the CPU (the processor) are:\n\na) Fetch, decode and execute program instructions in the proper order\nb) Transfer data to and from memory, and to and from the input/output sections of the computer\nc) Respond to external interrupts\nd) Provide overall timing and control signals for the entire system\n\nThe CPU is the 'brain' of the computer. It contains:\n• Control Unit (CU) — fetches and decodes instructions, controls data flow\n• Arithmetic Logic Unit (ALU) — performs arithmetic and logical operations\n• Registers — ultra-fast temporary storage inside the CPU\n• Cache Memory (L1, L2, L3) — fast buffer between CPU and RAM"
        },
        {
          id: "sb2",
          type: "mcq",
          question: "The primary functions of the Central Processing Unit (CPU) or the processor are:",
          options: [
            "A. Fetch, decode and execute program instructions in the proper order",
            "B. Transfer data to and from memory, and to/from I/O sections of the computer",
            "C. Respond to external interrupts",
            "D. Provide overall timing and control signals for the entire system",
            "E. All of them are true"
          ],
          answer: "E",
          explanation: "All four options describe primary CPU functions. The CPU fetches/decodes/executes instructions, handles data transfer, responds to interrupts, and provides system timing/control."
        },
        {
          id: "sb3",
          type: "mcq",
          question: "Which of the following is true about the Single-Core CPU?\n(i) The single-core CPU is the oldest type available and was a bit slow\n(ii) The single-core CPU can execute only one command at a time and it's not efficient in multi-tasking\n(iii) There is a significant decrease in performance whenever the user executes more than one application",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements correctly describe the single-core CPU. It processes one instruction at a time, is the oldest design, and performance drops significantly with multiple applications running."
        },
        {
          id: "sb4",
          type: "mcq",
          question: "Which of the following is true about the Dual-Core CPU?\n(i) Dual-core CPU is a single CPU that comprises two strong cores on the chip and functions like a dual CPU acting like one\n(ii) Dual-core CPU can execute more than one operation at the same time and at a higher speed\n(iii) Single-core CPUs are faster than Dual-core CPUs",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "A",
          explanation: "(i) and (ii) are true. (iii) is FALSE — dual-core CPUs are faster than single-core CPUs because they can execute multiple threads simultaneously."
        },
        {
          id: "sb5",
          type: "mcq",
          question: "Which of the following is true about the Quad-Core CPU?\n(i) The Quad-core CPU is a single CPU that comprises two strong cores on the chip and functions like a dual CPU acting like one\n(ii) The Quad-core CPU has 4 cores working simultaneously\n(iii) The Quad-Core CPU divides the workload into four cores",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements are true about the Quad-Core CPU. It is a single chip with 4 cores, all working simultaneously, with the workload divided across all four."
        },
        {
          id: "sb6",
          type: "mcq",
          question: "Which of the following is true about the Hexa-Core CPU?\n(i) The Hexa-Core CPU has 6 cores on the chip to execute\n(ii) The Hexa-Core CPU executes tasks and transmits all data more rapidly as compared to quad-core and dual-core processors\n(iii) The Hexa-Core CPU is a single CPU that comprises two strong cores on the chip and functions like a dual CPU acting like one",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements correctly describe the Hexa-Core CPU — 6 cores, faster than quad and dual-core processors, single chip design."
        },
        {
          id: "sb7",
          type: "mcq",
          question: "Which of the following is true about the Octa-Core CPU?\n(i) The Octa-Core CPU is a single CPU that comprises two strong cores on the chip and functions like a dual CPU acting like one\n(ii) The Octa-Core CPU has 4 cores working simultaneously\n(iii) The Octa-Core CPU divides the workload into four cores",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements are true about the Octa-Core CPU."
        },
        {
          id: "sb8",
          type: "mcq",
          question: "Which of the following is true about the Deca-Core CPU?\n(i) Deca-Core CPU comes with 10 cores which makes the system super fast\n(ii) Deca-Core CPU is much more efficient and faster than all the core processors which came earlier\n(iii) The Deca-Core CPU divides the workload into four cores",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "A",
          explanation: "(i) and (ii) are true. (iii) is FALSE — the Deca-Core divides the workload into TEN cores (deca = 10), not four."
        },
        {
          id: "sb9",
          type: "theory",
          question: "What are the basic functions of an Operating System (OS)?",
          answer: "Basic functions of an Operating System:\n\n(i) Controlling and allocating memory — manages RAM allocation to processes\n(ii) Prioritising the processing of instructions — scheduling (decides which process runs next)\n(iii) Controlling input and output devices — drivers and I/O management\n(iv) Facilitating networking — managing network communications\n(v) Managing files — file creation, deletion, access permissions\n(vi) Managing peripherals — printers, USB devices, etc.\n\nKey OS Concepts:\n• System Call — the OS service that provides an interface between a running program and the hardware\n• Interface — the point of communication between two systems or a system and a user\n• Booting — the process of loading the OS when a computer starts"
        },
        {
          id: "sb10",
          type: "mcq",
          question: "Which of the following is true about the basic functions of an OS?\n(i) Controlling and allocating memory\n(ii) Prioritising the processing of instructions\n(iii) Controlling input and output devices",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three are core OS functions: memory management, process scheduling (prioritisation), and I/O device management."
        },
        {
          id: "sb11",
          type: "mcq",
          question: "The Operating Systems Service that provides an interface between a running program and the hardware is called ___.",
          options: ["A. System Call", "B. Booting", "C. Caching", "D. Program execution", "E. None of the above"],
          answer: "A",
          explanation: "A System Call is the mechanism by which a running program requests services from the OS — it is the interface between user programs and the OS/hardware."
        },
        {
          id: "sb12",
          type: "mcq",
          question: "The point of communication between two systems or between a system and a user is called ___.",
          options: ["A. An interface", "B. A Communication link", "C. A Program", "D. Booting", "E. None of the above"],
          answer: "A",
          explanation: "An interface is the defined point of communication between two systems or between a system and a user. Examples: GUI, API, command line."
        }
      ]
    },

    // ===================== SECTION C: MOTHERBOARD & BUSES =====================
    {
      id: "sec-c",
      title: "Section C — Motherboard, Buses & System Components",
      color: "#f59e0b",
      icon: "🔌",
      description: "Motherboard structure, form factors, chipsets, bus types, and system interconnects",
      questions: [
        {
          id: "sc1",
          type: "theory",
          question: "What is a Motherboard? List its key components and alternative names.",
          answer: "The Motherboard (also called System board or Main board) is the main printed circuit board (PCB) of a computer. It is the central hub that connects all hardware components.\n\nKey components housed on or connected to the motherboard:\n• CPU socket — holds the processor\n• RAM slots — holds memory modules (DIMMs)\n• ROM chip — stores BIOS/UEFI firmware\n• Expansion slots — PCIe, PCI (for GPU, sound cards, etc.)\n• Storage connectors — SATA, M.2 for HDDs and SSDs\n• Chipset — Northbridge & Southbridge (or Platform Controller Hub)\n• Power connector — 24-pin ATX power\n• USB, audio, network ports\n\nAlternative names: System board, Main board, Logic board (Apple), Planar board"
        },
        {
          id: "sc2",
          type: "mcq",
          question: "The Motherboard is also called?",
          options: ["A. System board", "B. Meter board", "C. Plain board", "D. Computer socket", "E. None of the above"],
          answer: "A",
          explanation: "The Motherboard is commonly called the System board (or main board). It is the primary PCB that holds and connects all major computer components."
        },
        {
          id: "sc3",
          type: "mcq",
          question: "Which of the following holds the ROM, CPU, RAM and expansion cards?",
          options: ["A. Hard disk", "B. Floppy disk", "C. Motherboard", "D. Power Supply", "E. None of the above"],
          answer: "C",
          explanation: "The Motherboard is the central board that physically holds and electrically connects the ROM, CPU, RAM, and expansion cards (GPU, NIC, etc.)."
        },
        {
          id: "sc4",
          type: "mcq",
          question: "The physical layout of the different components and devices on the motherboard is called?",
          options: ["A. System Unit", "B. Form factor", "C. System Configuration", "D. System Specification", "E. None of the above"],
          answer: "B",
          explanation: "Form factor describes the physical dimensions, layout, and specifications of components on a motherboard. It determines size, mounting holes, and connector positions."
        },
        {
          id: "sc5",
          type: "mcq",
          question: "The main hub and central nervous system of the PC is called?",
          options: ["A. System Unit", "B. Form factor", "C. System Configuration", "D. Chipset", "E. None of the above"],
          answer: "D",
          explanation: "The Chipset is the main hub and central nervous system of the PC. It manages data flow between the CPU, RAM, storage, and peripheral devices."
        },
        {
          id: "sc6",
          type: "mcq",
          question: "The most common and standard form factor is called?",
          options: ["A. ATX", "B. Mini-ITX", "C. Micro-ATX", "D. E-ATX", "E. None of the above"],
          answer: "A",
          explanation: "ATX (Advanced Technology eXtended) is the most common and standard motherboard form factor, measuring 305×244 mm. Introduced by Intel in 1995."
        },
        {
          id: "sc7",
          type: "mcq",
          question: "In modern motherboards, the Southbridge chipset is integrated with which component platform?",
          options: ["A. Power Unit", "B. Form factor", "C. CPU", "D. Controller Hub", "E. None of the above"],
          answer: "C",
          explanation: "In modern systems, both Northbridge and Southbridge functions have been integrated into the CPU itself (as the Platform Controller Hub / PCH on Intel platforms)."
        },
        {
          id: "sc8",
          type: "theory",
          question: "Explain the three types of buses in a computer system. What does each carry?",
          answer: "The three types of system buses are:\n\n1. DATA BUS\n• Carries actual DATA between the CPU, memory, and I/O devices\n• BIDIRECTIONAL — data flows both to and from the CPU\n• Width (8, 16, 32, 64 bits) determines how much data can be transferred at once\n\n2. ADDRESS BUS\n• Carries MEMORY ADDRESSES from the CPU to memory and I/O devices\n• Unidirectional — CPU sends addresses only (outward)\n• Width determines the maximum amount of addressable memory (e.g., 32-bit = 4 GB)\n\n3. CONTROL BUS\n• Carries CONTROL SIGNALS from the CPU to all other components\n• Also carries the system clock pulse\n• Unidirectional — signals flow from the CPU\n• Signals include: read/write, interrupt request, bus request, clock\n\nKey distinction: Data Bus is BIDIRECTIONAL; Address and Control Buses are UNIDIRECTIONAL."
        },
        {
          id: "sc9",
          type: "mcq",
          question: "Which of the following carries memory addresses from the processor to other components such as primary memory and I/O devices?",
          options: ["A. Registers", "B. Form factor", "C. Address Bus", "D. Chipset", "E. None of the above"],
          answer: "C",
          explanation: "The Address Bus carries memory addresses from the CPU to memory and I/O devices. Its width determines how much memory the system can address."
        },
        {
          id: "sc10",
          type: "mcq",
          question: "Which of the following carries control signals from the CPU to the other components?",
          options: ["A. Control Bus", "B. Data Bus", "C. Address Bus", "D. Chipset", "E. None of the above"],
          answer: "A",
          explanation: "The Control Bus carries control signals (read/write, interrupts, clock pulses) from the CPU to all other components."
        },
        {
          id: "sc11",
          type: "mcq",
          question: "Which of the following is/are true about the Control Bus?\n(i) It carries control signals from the CPU to other components\n(ii) The Control Bus also carries the clock's pulse\n(iii) The Control Bus is unidirectional",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements are true about the Control Bus — it carries control signals and the clock pulse, and is unidirectional (from CPU outward)."
        },
        {
          id: "sc12",
          type: "mcq",
          question: "Which of the following is/are true about the Data Bus?\n(i) The Data Bus carries control signals from the CPU to other components\n(ii) The Data Bus also carries the clock's pulse\n(iii) The Data Bus is unidirectional",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "E",
          explanation: "None are true about the Data Bus! The Data Bus carries DATA (not control signals), does NOT carry clock pulses, and is BIDIRECTIONAL (not unidirectional). Common exam trap!"
        },
        {
          id: "sc13",
          type: "mcq",
          question: "The interface that serves as a pathway that connects the processor to memory and other components is known as ___.",
          options: ["A. Bus interface", "B. Cables and connectors", "C. Cache Memory", "D. Logic board (PCB)", "E. None of the above"],
          answer: "A",
          explanation: "The Bus interface is the pathway that connects the processor to memory and other components — it is the communication backbone of the system."
        },
        {
          id: "sc14",
          type: "mcq",
          question: "The first electronic computers used which of the following as switches?",
          options: ["A. Vacuum tubes", "B. Transistors", "C. Firmware", "D. Mechanical switches", "E. None of the above"],
          answer: "A",
          explanation: "First-generation computers (1940s–1950s) used vacuum tubes as electronic switches. Transistors replaced them in the 2nd generation (1950s–1960s)."
        }
      ]
    },

    // ===================== SECTION D: MEMORY HIERARCHY & TYPES =====================
    {
      id: "sec-d",
      title: "Section D — Memory Hierarchy, Types & Management",
      color: "#8b5cf6",
      icon: "💾",
      description: "Memory hierarchy, SRAM, DRAM, ROM, cache, paging, and storage concepts",
      questions: [
        {
          id: "sd1",
          type: "theory",
          question: "Explain the Memory Hierarchy. What are the different levels from fastest to slowest?",
          answer: "The Memory Hierarchy organises storage from fastest/smallest/most-expensive to slowest/largest/cheapest:\n\n1. CPU Registers (fastest, smallest)\n   • Inside the CPU, sub-nanosecond access\n   • Holds values being actively computed\n\n2. Cache Memory (L1 → L2 → L3)\n   • L1: fastest cache, smallest, inside CPU core\n   • L2: larger, slightly slower\n   • L3: shared among cores, largest cache\n   • Uses SRAM technology\n\n3. Main Memory (RAM)\n   • Uses DRAM technology\n   • Volatile — loses data without power\n   • CPU can access directly\n\n4. Secondary Storage (HDD / SSD)\n   • Non-volatile — retains data permanently\n   • Much slower than RAM\n   • CPU CANNOT access directly — data must be loaded into RAM first\n\nKey rule: Higher in hierarchy = faster, smaller, more expensive, volatile"
        },
        {
          id: "sd2",
          type: "mcq",
          question: "Which of the following is the lowest in the memory hierarchy?",
          options: ["A. Cache memory", "B. Secondary storage", "C. Registers", "D. RAM", "E. None"],
          answer: "B",
          explanation: "Secondary storage (HDD/SSD) is at the bottom of the memory hierarchy — it is the slowest but has the highest capacity and is non-volatile (permanent)."
        },
        {
          id: "sd3",
          type: "mcq",
          question: "Cache memory ___",
          options: [
            "A. is faster to access than CPU Registers",
            "B. has greater capacity than RAM",
            "C. is permanent storage",
            "D. is faster to access than RAM",
            "E. None"
          ],
          answer: "D",
          explanation: "Cache memory is faster to access than RAM (main memory). However, it is slower than CPU registers and has less capacity than RAM. It is volatile (not permanent)."
        },
        {
          id: "sd4",
          type: "mcq",
          question: "Cache memory acts between which of the following?",
          options: ["A. CPU and RAM", "B. RAM and ROM", "C. CPU and Hard Disk", "D. GPU and CPU", "E. None"],
          answer: "A",
          explanation: "Cache memory sits between the CPU and RAM (main memory). It bridges the speed gap — the CPU is much faster than RAM, so cache stores frequently used data for quick access."
        },
        {
          id: "sd5",
          type: "theory",
          question: "Compare SRAM and DRAM. What are they used for?",
          answer: "SRAM (Static RAM):\n• Uses 6 transistors per bit of storage (flip-flop circuit)\n• Does NOT need periodic refresh — data stays as long as power is on\n• Much FASTER than DRAM\n• More expensive per bit\n• Lower density (fewer bits per chip)\n• Used for: CPU Cache memory (L1, L2, L3)\n\nDRAM (Dynamic RAM):\n• Uses 1 capacitor + 1 transistor per bit\n• Must be REFRESHED thousands of times per second (capacitors leak charge)\n• SLOWER than SRAM\n• Less expensive per bit\n• Higher density\n• Used for: Main memory (PC RAM — DDR4, DDR5)\n• Major drawback of large DRAM: High cost factor\n\nKey Exam Points:\n• SRAM = Cache; DRAM = Main Memory\n• DRAM = refreshed; SRAM = not refreshed\n• Both are volatile (lose data without power)"
        },
        {
          id: "sd6",
          type: "mcq",
          question: "Which of the following memories must be refreshed many times per second?",
          options: ["A. Static RAM", "B. Dynamic RAM", "C. EPROM", "D. ROM", "E. None"],
          answer: "B",
          explanation: "Dynamic RAM (DRAM) uses capacitors that leak charge and must be refreshed thousands of times per second to maintain stored data. SRAM uses flip-flops and does not need refreshing."
        },
        {
          id: "sd7",
          type: "mcq",
          question: "Which of the following is true about SRAM (Static RAM)?\n(i) It is a type of memory chip used for most of the main memory in a modern PC\n(ii) It does not need the periodic refresh rates\n(iii) The SRAM design calls for a cluster of six transistors for each bit of storage",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "C",
          explanation: "(ii) and (iii) are true. (i) is FALSE — SRAM is used for CACHE memory, not main memory. DRAM is used for main memory in modern PCs."
        },
        {
          id: "sd8",
          type: "mcq",
          question: "The main memory in a Personal Computer (PC) is made of ___.",
          options: ["A. cache memory", "B. static RAM", "C. Dynamic RAM", "D. chipset", "E. None"],
          answer: "C",
          explanation: "PC main memory uses Dynamic RAM (DRAM) — specifically DDR4/DDR5 SDRAM. DRAM is used because it is cheaper, has higher density, and is sufficient for main memory speeds."
        },
        {
          id: "sd9",
          type: "mcq",
          question: "Generally, Dynamic RAM is used as the main memory in a computer system as it ___.",
          options: ["A. consumes less power", "B. has higher speed", "C. has lower cell density", "D. needs refreshing circuitry", "E. none"],
          answer: "A",
          explanation: "DRAM is used as main memory primarily because it consumes less power (and is cheaper) than SRAM. SRAM consumes more power and is much more expensive."
        },
        {
          id: "sd10",
          type: "mcq",
          question: "The fastest Memory in a computer system is made from which of the following memory technologies?",
          options: ["A. SRAM", "B. ROM", "C. RAM (DRAM)", "D. Virtual Memory", "E. DRAM"],
          answer: "A",
          explanation: "SRAM (Static RAM) is the fastest memory technology. It is used in CPU cache (L1, L2, L3) because of its speed. It does not require refresh cycles, giving it faster access times."
        },
        {
          id: "sd11",
          type: "mcq",
          question: "Which of the following is true about ROM (Read-Only Memory)?\n(i) ROM is a nonvolatile memory\n(ii) It does not need the periodic refresh rates\n(iii) ROM is an ideal place to put the PC's startup instructions and the software that boots the system",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements are true about ROM — it is nonvolatile (retains data without power), needs no refresh, and stores BIOS/UEFI firmware that boots the system."
        },
        {
          id: "sd12",
          type: "mcq",
          question: "The difference between memory and storage is that the memory is ___ and storage is ___.",
          options: ["A. temporary, permanent", "B. permanent, temporary", "C. slow/fast", "D. permanent, slow", "E. None of the above"],
          answer: "A",
          explanation: "Memory (RAM) is temporary/volatile — data is lost when power is off. Storage (HDD/SSD) is permanent/non-volatile — data persists without power."
        },
        {
          id: "sd13",
          type: "mcq",
          question: "Which of the following memories can the CPU access directly?",
          options: ["A. Secondary memory", "B. Secondary storage", "C. The RAM", "D. Flash Drive", "E. None of the above"],
          answer: "C",
          explanation: "The CPU can directly access RAM (main memory). Secondary storage (HDD, SSD, Flash) cannot be accessed directly — data must first be loaded into RAM."
        },
        {
          id: "sd14",
          type: "mcq",
          question: "Which one of the following is NOT a secondary storage?",
          options: ["A. Magnetic disks", "B. Magnetic tapes", "C. RAM", "D. None of the mentioned", "E. All of the mentioned"],
          answer: "C",
          explanation: "RAM (Random Access Memory) is primary/main memory — it is volatile and directly accessible by the CPU. Secondary storage includes magnetic disks, tapes, SSDs, and optical discs."
        },
        {
          id: "sd15",
          type: "mcq",
          question: "A special high-speed temporary storage device where frequently accessed data can be stored for rapid access is called ___.",
          options: ["A. ROM", "B. DRAM", "C. Cache Memory", "D. CMOS", "E. None of the above"],
          answer: "C",
          explanation: "Cache Memory is the high-speed temporary storage that holds frequently accessed data for rapid CPU access. It reduces the average time to access memory."
        },
        {
          id: "sd16",
          type: "mcq",
          question: "The reason for the implementation of cache memory is ___.",
          options: [
            "A. To increase the internal memory of the system",
            "B. The difference in speeds of operation of the processor and memory",
            "C. To reduce the memory access and cycle time",
            "D. All of the mentioned",
            "E. None"
          ],
          answer: "D",
          explanation: "Cache memory exists for all these reasons: to bridge the speed gap between CPU and RAM, and to reduce overall memory access and cycle time."
        },
        {
          id: "sd17",
          type: "mcq",
          question: "___ is the bottleneck when it comes to computer performance.",
          options: ["A. Memory access time", "B. Memory cycle time", "C. Delay", "D. Latency", "E. None of the above"],
          answer: "B",
          explanation: "Memory cycle time is the primary bottleneck in computer performance — the time between two consecutive memory accesses is the main limiting factor."
        },
        {
          id: "sd18",
          type: "mcq",
          question: "The memory management technique in which the system stores and retrieves data from secondary storage for use in main memory is called ___.",
          options: ["A. fragmentation", "B. paging", "C. mapping", "D. tagging", "E. None"],
          answer: "B",
          explanation: "Paging is the memory management technique where the OS stores and retrieves data blocks (pages) from secondary storage (disk) to use in main memory. This enables virtual memory."
        },
        {
          id: "sd19",
          type: "mcq",
          question: "To reduce the memory access time we generally make use of ___.",
          options: ["A. SDRAMs", "B. Heaps", "C. Cache", "D. Higher capacity RAMs", "E. None of the above"],
          answer: "C",
          explanation: "Cache memory is the primary technique used to reduce memory access time by storing frequently used data closer to the CPU."
        },
        {
          id: "sd20",
          type: "mcq",
          question: "The number of successful accesses to memory stated as a fraction is called ___.",
          options: ["A. Access rate", "B. Success rate", "C. Hit rate", "D. Miss rate", "E. None of the above"],
          answer: "C",
          explanation: "Hit rate is the fraction of memory accesses that are successfully found in cache. Miss rate = 1 - Hit rate."
        },
        {
          id: "sd21",
          type: "mcq",
          question: "Which of the following is the internal memory of a computer system?",
          options: ["A. CPU register", "B. Cache", "C. Main memory", "D. All of these", "E. None of the above"],
          answer: "D",
          explanation: "CPU registers, Cache, and Main memory (RAM) are all forms of internal memory — they are directly accessible by the CPU and located on or near the processor."
        },
        {
          id: "sd22",
          type: "theory",
          question: "Explain the major drawback of DRAM for building large memory systems.",
          answer: "The major drawback of building a large memory system with DRAM is the HIGH COST FACTOR.\n\nOther drawbacks:\n• Requires refresh circuitry — adds complexity and power overhead\n• Slower than SRAM — higher latency\n• Susceptible to errors from cosmic rays (requires ECC in servers)\n• Generates heat at high densities\n• Memory cycle time creates system bottleneck\n\nDespite these drawbacks, DRAM is still preferred for main memory because:\n• It is much cheaper per bit than SRAM\n• Higher density — more storage per chip\n• Adequate speed for main memory purposes\n• Well-established manufacturing processes\n\nSolution to DRAM cost: Tiered memory hierarchy (Registers → Cache → RAM → Storage) manages the cost-performance trade-off."
        }
      ]
    },

    // ===================== SECTION E: MCQ QUICK FIRE =====================
    {
      id: "sec-e",
      title: "Section E — MCQ Quick Fire Round",
      color: "#06b6d4",
      icon: "🎯",
      description: "All key MCQ exam questions from past papers — test your knowledge across all topics",
      questions: [
        {
          id: "se1",
          type: "mcq",
          question: "Which of the following carries data between the CPU and other Components?",
          options: ["A. Power Unit", "B. Form factor", "C. Registers", "D. Controller Hub", "E. None of the above"],
          answer: "C",
          explanation: "Registers are internal CPU storage that directly carry data being processed. The Data Bus carries data between CPU and external components — but registers handle intra-CPU data."
        },
        {
          id: "se2",
          type: "mcq",
          question: "Which of the following is true about the Motherboard and Daughterboard?\n(i) The daughterboard is smaller than a Motherboard\n(ii) Daughterboard supports Motherboard\n(iii) Daughterboards are plugged into Motherboards",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three statements are true. Daughterboards (expansion cards) are smaller than the motherboard, they expand/support its capabilities, and they are physically plugged into motherboard slots."
        },
        {
          id: "se3",
          type: "mcq",
          question: "Which of the following is true about Computer Architecture?\n(i) Computer Architecture is the science and art of selecting and interconnecting hardware components to create computers that meet functional, performance and cost goals\n(ii) The purpose is to design a computer that maximises performance while keeping power consumption in check",
          options: ["A. Only (i) is true", "B. Only (ii) is true", "C. Both (i) and (ii) are true", "D. Neither is true", "E. None of the above"],
          answer: "C",
          explanation: "Both statements accurately describe Computer Architecture — the science of selecting hardware to meet goals, and the design goal of maximising performance while managing power and cost."
        },
        {
          id: "se4",
          type: "mcq",
          question: "Which of the following is true about SRAM?\n(i) You cannot pack a lot of bits into a very small chip\n(ii) You cannot pack a lot of bits into a very small chip\n(iii) The memory cells in a DRAM chip are tiny capacitors that retain a charge to indicate a bit",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "B",
          explanation: "(i) and (iii) are true. SRAM uses 6 transistors per bit so it cannot pack many bits into a small space. DRAM uses tiny capacitors to store bits — both statements are correct."
        },
        {
          id: "se5",
          type: "mcq",
          question: "Which of the following is a type of architecture used in computers nowadays?",
          options: ["A. Microarchitecture", "B. Harvard Architecture", "C. Von-Neumann Architecture", "D. System Design", "E. None of the above"],
          answer: "A",
          explanation: "Microarchitecture is the implementation-level architecture used in modern CPUs (how the ISA is physically implemented). Harvard-style L1 caches are also used in modern CPUs."
        },
        {
          id: "se6",
          type: "mcq",
          question: "The flash memory modules designed to replace the functioning of a hard disk is ___.",
          options: ["A. RIMM", "B. FIMM", "C. Flash drives (SSDs)", "D. DIMM", "E. None of the above"],
          answer: "C",
          explanation: "Flash drives (Solid State Drives - SSDs) use flash memory and are designed to replace traditional hard disks. They are faster, quieter, and more durable."
        },
        {
          id: "se7",
          type: "mcq",
          question: "The major drawback of building a large memory with DRAM is ___.",
          options: ["A. The large cost factor", "B. The inefficient memory organisation", "C. The Slow speed of operation", "D. All of the mentioned", "E. None"],
          answer: "A",
          explanation: "The large cost factor is the primary drawback of building large DRAM-based memory systems. DRAM per-chip costs add up significantly at large scales."
        },
        {
          id: "se8",
          type: "mcq",
          question: "Which one of the following is not a secondary storage?",
          options: ["A. Magnetic disks", "B. Magnetic tapes", "C. RAM", "D. None of the mentioned", "E. All of the mentioned"],
          answer: "C",
          explanation: "RAM is primary/main memory (volatile, directly accessible). Secondary storage = HDDs, SSDs, magnetic tapes, optical discs."
        },
        {
          id: "se9",
          type: "mcq",
          question: "Which of the following is a type of computer architecture?",
          options: ["A. Microarchitecture", "B. Harvard Architecture", "C. Von-Neumann Architecture", "D. All of the mentioned", "E. None of the above"],
          answer: "D",
          explanation: "All three — Microarchitecture, Harvard Architecture, and Von-Neumann Architecture — are types of computer architecture."
        },
        {
          id: "se10",
          type: "mcq",
          question: "Which of the following is true about the Hexa-Core CPU?\n(i) It has 6 cores\n(ii) It executes tasks more rapidly than quad-core and dual-core processors\n(iii) It is a single CPU comprising two strong cores functioning like a dual CPU",
          options: ["A. (i) and (ii) are true", "B. (i) and (iii) are true", "C. (ii) and (iii) are true", "D. All of them are true", "E. None of them is true"],
          answer: "D",
          explanation: "All three are true about the Hexa-Core CPU — 6 cores, faster than previous generation chips, and it is one single chip with 6 cores."
        },
        {
          id: "se11",
          type: "mcq",
          question: "Which of the following carries control signals from the CPU to the other components?",
          options: ["A. Control Bus", "B. Data Bus", "C. Address Bus", "D. Chipset", "E. None of the above"],
          answer: "A",
          explanation: "The Control Bus carries control signals (read, write, interrupt, clock pulses) from the CPU to other components."
        },
        {
          id: "se12",
          type: "mcq",
          question: "The point of communication between two systems or between a system and a user is called ___.",
          options: ["A. An interface", "B. Communication link", "C. A Program", "D. Booting", "E. None of the above"],
          answer: "A",
          explanation: "An interface is the defined point of communication between two systems or between a system and a user."
        },
        {
          id: "se13",
          type: "mcq",
          question: "Which of the following holds the ROM, CPU, RAM and expansion cards?",
          options: ["A. Hard disk", "B. Floppy disk", "C. Motherboard", "D. Power Supply", "E. None of the above"],
          answer: "C",
          explanation: "The Motherboard holds and connects all major components including CPU, RAM, ROM, and expansion cards."
        },
        {
          id: "se14",
          type: "mcq",
          question: "Which of the following is the OS service that provides an interface between a running program and the hardware?",
          options: ["A. System Call", "B. Booting", "C. Caching", "D. Program execution", "E. None of the above"],
          answer: "A",
          explanation: "A System Call is the OS mechanism that allows running programs to request hardware services — it is the bridge between user-space programs and the kernel/hardware."
        },
        {
          id: "se15",
          type: "mcq",
          question: "Which of the following memories must be refreshed many times per second?",
          options: ["A. Static RAM", "B. Dynamic RAM", "C. EPROM", "D. ROM", "E. None"],
          answer: "B",
          explanation: "Dynamic RAM (DRAM) must be refreshed thousands of times per second because its capacitors leak charge and lose stored data without constant refreshing."
        }
      ]
    }
  ]
};
