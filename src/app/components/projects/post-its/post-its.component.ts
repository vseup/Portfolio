import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type PostItNote = Readonly<{
  label: string;
  text: string;
}>;

type PostItVariant = Readonly<{
  imageSrc: string;
  baseRotate: string;
  hoverRotate: string;
}>;

const POST_IT_VARIANTS: readonly PostItVariant[] = [
  {
    imageSrc: '/images/post-its/post-it-1.png',
    baseRotate: '-2deg',
    hoverRotate: '-8deg',
  },
  {
    imageSrc: '/images/post-its/post-it-2.png',
    baseRotate: '1deg',
    hoverRotate: '6deg',
  },
  {
    imageSrc: '/images/post-its/post-it-3.png',
    baseRotate: '-1deg',
    hoverRotate: '-5deg',
  },
] as const;

@Component({
  selector: 'app-post-its',
  imports: [NgOptimizedImage],
  templateUrl: './post-its.component.html',
  styleUrl: './post-its.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostItsComponent {
  readonly notes = input.required<readonly PostItNote[]>();
  readonly ariaLabel = input('Post-it notes');

  protected readonly renderedNotes = computed(() =>
    this.notes().map((note, index) => {
      const variant = POST_IT_VARIANTS[index % POST_IT_VARIANTS.length];
      return {
        ...note,
        id: `${note.label}-${index}`,
        imageSrc: variant.imageSrc,
        baseRotate: variant.baseRotate,
        hoverRotate: variant.hoverRotate,
      };
    }),
  );
}
