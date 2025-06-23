import { create } from "zustand";

const useBlockStore = create((set, get) => ({
  blocks: [
    {
      id: "send_email",
      type: "action",
      label: "Send Email",
      description: "Simulates sending an email",
      inputs: ["to", "subject", "body"],
      simulate: (input) => {
        console.log(`📧 Simulated email to ${input.to}`);
      },
    },
    {
      id: "delay_timer",
      type: "action",
      label: "Delay",
      description: "Wait for a few seconds",
      inputs: ["duration"],
      simulate: (input) => {
        console.log(`⏱️ Simulated delay of ${input.duration} seconds`);
      },
    },
    {
      id: "on_form_submit",
      type: "trigger",
      label: "On Form Submit",
      description: "Starts when a form is submitted",
      inputs: ["formId"],
      simulate: () => {
        console.log("📝 Simulated form submission");
      },
    },
  ],

  // Actions
  getBlockById: (id) => {
    const { blocks } = get();
    return blocks.find((b) => b.id === id);
  },

  getAllBlocks: () => {
    const { blocks } = get();
    return blocks;
  },
}));

export default useBlockStore;
