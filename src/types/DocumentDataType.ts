export interface DocumentType {
  id: number;
  name: string;
}

interface DocumentDataType {
  id: number;
  categoryName: string;
  documents: DocumentType[];
}

export default DocumentDataType;
