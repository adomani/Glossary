\\( \def\A{{\mathbb{A}}} \def\C{{\mathbb{C}}} \def\P{{\mathbb{P}}} \def\Z{{\mathbb{Z}}} \def\Q{{\mathbb{Q}}} \def\N{{\mathbb{N}}} \def\spec{\operatorname{Spec}} \def\oh{\frac{1}{2}} \def\zoh{\Z[\oh]} \\)


# Varieties vs Schemes

To talk about the difference between varieties and schemes, we should have a definition of both in mind.  It is common to introduce varieties **before** introducing schemes.  Later, schemes are introduced in general and varieties are viewed as schemes with certain extra properties.  For instance, in Hartshorne's *Algebraic Geometry*, varieties are introduced in Chapter 1, schemes in Chapter 2.

Here is a standard definition of varieties not involving schemes.  Let \\(k\\) be an algebraically closed field.  A *projective variety over \\(k\\)* is the vanishing sets of homogeneous polynomials in \\(\P\^n (k)\\), for some \\(n \in \N\\).  There is a technicality saying that a variety cannot be written as the union of two varieties, neither of which contains the other.  This is rarely an issue and mostly a matter of convention.

Now that we know what projective varieties are, a *variety* is the complement inside a projective variety of the vanishing set of homogeneous polynomials.  More conceptually, a variety is an open subset of a projective variety.

After a few preliminaries on varieties, schemes are introduced.  I won't go here into the definition of schemes: this might be the content of a later post.  Varieties are re-defined as integral, separated schemes of finite type over a field.

The first difference that catches the eye is that

- **before** the set of points of a variety was a subset of (homogeneous or affine) coordinates of points in \\(\P\^n(k)\\) or \\(\A\^n(k)\\);
- **after** the set of points of a variety is a weird collection of prime ideals, both maximal and non-maximal.

In particular, for a variety-viewed-as-a-scheme, the maximal ideals are in bijection with the "old" points, while the non-maximal prime ideals do not correspond to anything in the original definition of variety.

While this is certainly a good point, I always felt that it failed to address the "real" issue: varieties and schemes were defined in intrinsically different ways and it is a little unsatisfying to compare their definitions.

In other words: the definition of *variety* is "a subset of \\(\P\^n\\) with some properties"; the definition of *scheme* is "a locally ringed space with some properties".  Of course they are different!  Simply comparing the underlying topological spaces is not good enough!

Once there is a definition of scheme, varieties are identified with integral, separated, schemes of finite type over a field.  [Hartshorne also requires the field to be algebraically closed, but I will drop this assumption.]  Thus, tautologically, any scheme that does not satisfy at least one of the conditions

1.  integral, splitting further into
  <ol type="a"> 
    <li>reduced, and</li>
    <li>irreducible;</li>
  </ol>
1.  separated;
1.  finite type over a field;

is a scheme that is not a variety.  Below are examples of schemes fitting all requirements except for one.

1a. \\(\spec k[x]/(x\^2)\\) is not reduced;

1b. \\(\spec (k \oplus k) \simeq \spec k[x]/(x\^2-x)\\) is not irreducible;

2\. usual "affine line with the doubled origin" is not separated;

3\. \\(\spec \Z\\) is not defined over a field.

**1a. Nonreduced schemes.**
For me, this is the most useful gain in going from varieties to schemes.  In some sense, non-reducedness often takes the form of "conservation of mass".  It also helps in making precise the idea of "counting with multiplicities".

**1b. Reducible schemes.**
The gain here is often just a matter of convention.  Some people allow varieties to be reducible (although I personally do not).  Regardless of your convention, it is usually easy to convert from one to the other and little is gained/lost with either choice.

**2. Non-separated schemes.**
I personally rarely encounter non-separated schemes.  For instance, a subscheme of a separated scheme is separated and projective (or, in fact, proper) schemes are separated.

**3. Schemes not of finite type.**
Some schemes not of finite type make their way into usefulness for me!  Most of the rings not of finite type that I encounter, though, are *essentially* of finite type: they are the localization of a ring of finite type.  The main example is passing from a scheme defined over \\(\spec \Z\\) to a scheme defined over \\(\spec \Q\\): the morphism \\(\spec \Q \to \spec \Z\\) is not of finite type, but it is essentially of finite type.

**3'. Schemes not over a field.**
Another huge advantage of working with schemes!  For instance, the spectra of the integers \\(\Z\\), of Dedekind domains, of local rings play incredibly important roles in number theory and in algebraic geometry.