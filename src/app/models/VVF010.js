/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VVF010', {
    VVF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VVF_FORPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVF_OPEMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVF_TRACPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVF_DATMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VVF_DATEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VVF_DATFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VVF_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VVF_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVF_FORPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VVF_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVF_TESFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VVF_NUMNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VVF_SERNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VVF_VALMOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_TOTSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_TOTFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_DESACE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_VBAIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_ALIIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_VBAICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_ALIICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_TOTICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_ICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_CODBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VVF_QTDVEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_SITNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVF_CODAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    VVF_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVF_CONFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_NUMTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVF_DATUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VVF_DTHEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                   '
    },
    VVF_OBSMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVF_EXPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVF_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVF_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    VVF_PLIQUI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_ESPEC1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVF_VOLUM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_ESPEC2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVF_VOLUM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_ESPEC3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVF_VOLUM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_ESPEC4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVF_VOLUM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_OBSMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVF_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    VVF_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    VVF_TIPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVF_RECSF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVF_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVF_MENNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    VVF_MENPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VVF_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'VVF010'
  });
};
