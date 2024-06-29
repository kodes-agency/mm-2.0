type Text = {
  content?: {
    title?: string | null;
    text?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    text_html?: string | null;
  };
  style: {
    style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange';
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'text';
}

export const Text = ({ block }: { block: Text }) => {
  return (
    <section className={`bg-white flex flex-col items-center py-20 px-6 md:px-10`}>
      <div className="flex flex-col max-w-5xl space-y-8">
        <h2 className="font-bold text-3xl md:text-4xl text-black">{block.content?.title}</h2>
        <div
          className="flex flex-col
          [&_blockquote]:font-bold [&_blockquote]:pl-5 md:[&_blockquote]:pl-10 [&_blockquote]:text-red [&_blockquote]:text-lg [&_blockquote]:max-w-3xl
          space-y-3
          [&_h3]:font-bold [&_h3]:text-2xl
          [&_h4]:font-bold [&_h4]:text-xl
          [&_ul]:list-disc [&_ul]:pl-6 md:[&_ul]:pl-12 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:pl-6 md:[&_ol]:pl-12 [&_ol]:space-y-1
          "
          dangerouslySetInnerHTML={{ __html: block.content?.text_html || '' }}
        ></div>
      </div>
    </section>
  )
}
;``
