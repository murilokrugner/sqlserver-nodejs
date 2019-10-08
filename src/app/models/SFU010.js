/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFU010', {
    FU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_TIPOMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FU_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FU_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FU_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FU_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FU_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FU_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FU_TPCLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FU_CLASCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_GRPCLAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_CLASSIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_VALTERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FU_TIPOREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FU_RECEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FU_LOJAREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_CONSTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FU_VOL115: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FU_CHV115: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FU_GRUPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_TIPLIGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FU_CLASSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_VLFORN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    FU_CLCOSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_DEMCT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FU_DEMCTP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FU_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FU_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FU_DTLEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FU_PERFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FU_CODUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FU_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FU_SUBCLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FU_DTANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FU_TERMINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FU_AREATER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'SFU010'
  });
};
