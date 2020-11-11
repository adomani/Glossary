\\( \def\A{{\mathbb{A}}} \def\C{{\mathbb{C}}} \def\Z{{\mathbb{Z}}} \def\Q{{\mathbb{Q}}} \def\R{{\mathbb{R}}} \def\N{{\mathbb{N}}} \def\fm{{\mathfrak{m}}} \def\spec{\operatorname{Spec}} \def\oh{\frac{1}{2}} \def\zoh{\Z[\oh]} \def\zmod#1{\Z/#1\Z} \\)


# Affine schemes

Affine schemes are the building blocks of schemes, since any scheme admits an open cover by affine schemes.

For me, the most important result about affine schemes is the equivalence

\\[ \\left\\{\\begin{array}{c}\\textrm{category of} \\cr \\textrm{affine schemes}\\end{array} \\right\\} \longleftrightarrow \\left\\{ \\begin{array}{c}\\textrm{opposite category of} \\cr \\textrm{commutative rings with }1\\end{array}\\right\\}.\\]

It may take a while to unwind the definition and even longer to internalize it, but I definitely found that it was worth the effort!  Let me take some time explaining the great consequences of this equivalence.

First, the left-hand side of the equivalence is what we are trying to understand and the right-hand side is something that is really familiar: this is good!  The "opposite" part may throw you away, but we begin by forgetting about it and pretending that it is not there: we will simply reverse all the arrows in the end!

So, we are trying to understand the (opposite) category of commutative rings with 1: that's actually really easy!

- The objects of the category are commutative rings with an identity -- so far, so good!
- The morphisms between two such commutative rings are the ring homomorphisms.
- Now reverse all the arrows and you have constructed the category of affine schemes!

That's it!

Where is the difficulty?  Where did \\(\spec\\), prime ideals, Zariski topology, regular functions,... all go?  Well, the next part is to obtain an intuition for affine schemes that is "independent" of commutative rings and is closer to topological spaces.

So far, we used the equivalence above as a *definition*, whereas it is normally a *theorem*: we now roll our sleeves up and properly give a geometric definition of affine schemes.

Given a commutative ring \\(R\\) with unit, we want to construct a topological space \\(\spec R\\) with the property that \\(R\\) is the ring of functions on \\(\spec R\\).  [We should really define a topological space **and** a sheaf of rings, but we focus first on the topological space.  After all, it is fairly common to abuse notation and view \\(\spec R\\) just as the underlying topological space.]

You might have seen that the points of \\(\spec R\\) are the prime ideals of \\(R\\).  Suppose that we have a topological space \\(X\\) and the ring \\(C(X,\R)\\) of continuous functions on \\(X\\).  Recall that we are trying to read off information about \\(X\\) from \\(C(X,\R)\\) alone.  Each point \\(x \in X\\) determines an evaluation map

\\[ \begin{array}{rcl} ev\_x \colon \; C(X,\R) & \longrightarrow & \R \cr f \hspace{10pt} & \longmapsto & f(x). \end{array} \\]

The evaluation map \\(ev\_x\\) is a ring homomorphism and the codomain is a field.  Hence, the kernel of \\(ev\_x\\) is a maximal ideal.

I invite you to think a bit about how much you can go the opposite way.

1. Is it true that a maximal ideal in \\(C(X,\R)\\) necessarily arises as the kernel of the evaluation map at *some* point of \\(X\\)?  [This is a hard question, that I do not expect you to solve!  One of the fundamental results is the [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation) of a [commutative C^(*)-algebra](https://en.wikipedia.org/wiki/C*-algebra#Commutative_C*-algebras).]
1. What are the zero-divisors in the ring of continuous functions on a topological space?  In particular, you might like to know whether, given two distinct points \\(x,y\\) on \\(X\\), there is a continuous function \\(f\_x \colon X \to \R\\) such that \\(f\_x(x) \neq 0\\) and \\(f\_x(y)=0\\).  [In this context, the [separation axioms](https://en.wikipedia.org/wiki/Separation_axiom) and [Urisohn's lemma](https://en.wikipedia.org/wiki/Urysohn%27s_lemma) become relevant.]

Item 1 aims to provide a description of the points of \\(X\\) from algebraic properties of the ring of continuous functions on \\(X\\).  Item 2 aims to provide intuition about prime ideals: if \\(f,g \in C(X,\R)\\) are continuous functions and \\(fg=0\\) identically on \\(X\\), then for every prime ideal \\(I \subset C(X,\R)\\), at most one among \\(f\\) and \\(g\\) may be outside of \\(I\\).

An immediate consequence of the discussion above is that maximal ideals in a ring \\(R\\) appear like a good algebraic substitute for points of a topological space.  In what follows, we interchangeably talk about ideals in \\(R\\) and the ring homomorphism whose kernel is \\(I\\).

A second consequence is that zero divisors are way too many to make prime ideals much different from maximal ideals... **if** we work with *all* the continuous functions on our topological space.  However, we are headed in the direction of studying polynomial rings and maybe rational functions, which are hardly general continuous functions!  For perspective, recall that a rational (or even meromorphic) function on \\(\C\\) whose zero set has an accumulation point is identically zero (see [Identity Theorem](https://en.wikipedia.org/wiki/Identity_theorem)).  Thus, in our context, it might make sense to allow also prime ideals, and not simply maximal ideals.  Let us see one advantage of allowing non-maximal, prime ideals.

Suppose that we want to identify a mystery ring \\(A\\).  We are told that there is a bijection between the maximal ideals of \\(A\\) and the prime numbers such that if the maximal ideal \\(\fm \subset A\\) corresponds to the prime number \\(p \in \N\\), then the quotient \\(A/\fm\\) is isomorphic to \\(\zmod{p}\\).  Can we reconstruct our ring \\(A\\)?


 \\(\fm \subset A\\), there is a prime number , 


  Let's work out a couple of examples to see why this makes sense.

### Example

The spectrum of a field \\(k\\).  We are looking for a topological space whose non-zero functions are all invertible.  


This allows to bring a geometric intuition to algebraic problems, justifying the name "algebraic geometry".

Let's begin to convert the algebraic data encoded by a commutative ring with identity into geometric data.
<!-- From now on, *ring* already stands for *commutative ring with identity*.-->

First, to be really geometric, we construct a topological space out of a commutative ring with identity R.  The guiding intuition is that our ring is going to be the ring of continuous functions on 


Let's begin.  The easiest is \\(\spec\\): this is a contravariant functor realizing the anti-equivalence above: we feed to \\(\spec\\) a commutative ring with identity and it returns an affine scheme.  


The fact that first comes to my mind when thinking about affine schemes is



This is analogous to the definition of a manifold: every point on a manifold has a neighbourhood that is diffeomorphic to \\(\R\^n\\), for some \\(n \in \N\\): these are the *charts*.



In fact, a manifold comes with a notion of what are differentiable functions (usually encoded by an *atlas*) that are locally the differentiable functions on \\(\R\^n\\), pulled-back via the local charts.


 and an affine scheme come with a notion 



Initially, it might disconcerting to have 

Intuitively, an
affine scheme is a subset of \\(\A\^n\\) defined by the vanishing of a set of polynomials.  A little bit more formally,
the vanishing set turns out to only carry partial information.  What "really" carries all the required information is
the "ring of regular functions".  For the vanishing sets \\(X\\) in \\(\A\^n\\) of polynomials, this is, tautologically,
the quotient of \\(k[x\_1,...,x\_n]\\) modulo the ideal of the polynomials defining \\(X\\).  Here, there is a fundamental
subtlety: the subset point of view "forgets" some of the information carried by the ideal!  This also highlights the
main difference between varieties and schemes.  Varieties are determined by their sets of points, at least if the base
field is algebraically closed.  However, schemes package more information and remember the vanishing ideal (or, more
intrinsically, the quotient ring).

This difference is already evident for "zero-dimensional schemes" in \\(\A\^1\\).  The vanishing set of \\(x\\) is the single
point \\(x=0\\).  The same is true for any positive power of \\(x\\): for any integer \\(n \geq 1\\), the vanishing set
of \\(x\^n\\) is the single point \\(x=0\\).  Yet, the ideals \\((x\^n)\\) and \\((x\^m)\\) are only equal if \\(n=m\\).
This means that the schemes \\(k[x]/(x\^n)\\) and \\(k[x]/(x\^m)\\) are only isomorphic if \\(n=m\\), even though the
vanishing sets of the two ideals in \\(\A\^1\\) coincide.

### Running example
\\(\frac{1}{2} \in \Q\\)

### Example
#### The fundamental theorem of algebra
##### Varieties version
A polynomial with coefficients in \\(\C\\) and positive degree admits a root.
##### Schemes version
A polynomial with coefficients in \\(\C\\) and of degree n admits n roots counted with multiplicities.

Schemes are perfectly geared for keeping track of the intuitive notion of multiplicity.  In the varieties statement of
the fundamental theorem of algebra, the degree of a polynomial is only used to rule out constant polynomials.  In the
schemes statement, the theorem asserts that the degree of the polynomial is encoded in the scheme defined by the
vanishing of the polynomial itself.  In a physical analogy, you can think of the degree of a polynomial as a measure of
the mass of the scheme.  A system of particles with positive total mass must have at least one particle.  The scheme
knows the total mass, the variety only knows whether the mass is positive or not.