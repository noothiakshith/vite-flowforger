import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useFlowEditorStore = create((set, get) => ({
  // Initial State
  nodes: [],
  edges: [],
  selectedNodeId: null,

  // Node Actions
  addNode: (blockId, position) =>
    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id: uuidv4(),
          blockId,            // reference to the block template (e.g. "send_email")
          type: "action",     // or "trigger" – you can pass it too
          position,           // { x, y }
        },
      ],
    })),

  updateNodePosition: (nodeId, newPosition) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId ? { ...node, position: newPosition } : node
      ),
    })),

  removeNode: (nodeId) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== nodeId),
      edges: state.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
    })),

  clearNodes: () => set({ nodes: [] }),

  // Edge Actions
  addEdge: (source, target) =>
    set((state) => ({
      edges: [
        ...state.edges,
        {
          id: uuidv4(),
          source,
          target,
        },
      ],
    })),

  removeEdge: (edgeId) =>
    set((state) => ({
      edges: state.edges.filter((edge) => edge.id !== edgeId),
    })),

  clearEdges: () => set({ edges: [] }),

  // Node Selection
  selectNode: (nodeId) => set({ selectedNodeId: nodeId }),
  deselectNode: () => set({ selectedNodeId: null }),

  getSelectedNode: () => {
    const { selectedNodeId, nodes } = get();
    return nodes.find((node) => node.id === selectedNodeId) || null;
  },

  // Full Reset
  resetFlow: () => set({ nodes: [], edges: [], selectedNodeId: null }),
}));

export default useFlowEditorStore;
