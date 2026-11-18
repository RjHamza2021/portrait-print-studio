import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Subject } from "@/api/types";

interface StudioState {
  file: File | null;
  photoUrl: string | null;
  subject: Subject;
  styleId: string | null;
  customPrompt: string;
  setFile: (file: File | null) => void;
  setPhotoUrl: (url: string | null) => void;
  setSubject: (subject: Subject) => void;
  setStyleId: (styleId: string | null) => void;
  setCustomPrompt: (prompt: string) => void;
}

const StudioContext = createContext<StudioState | null>(null);

export function StudioStateProvider({ children }: { children: ReactNode }) {
  const [file, setFile] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [subject, setSubject] = useState<Subject>("pet");
  const [styleId, setStyleId] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState("");
  const value = useMemo(() => ({ file, photoUrl, subject, styleId, customPrompt, setFile, setPhotoUrl, setSubject, setStyleId, setCustomPrompt }), [file, photoUrl, subject, styleId, customPrompt]);
  return <StudioContext.Provider value={value}>{children}</StudioContext.Provider>;
}

export function useStudioState(): StudioState {
  const value = useContext(StudioContext);
  if (!value) throw new Error("Studio state is not available.");
  return value;
}