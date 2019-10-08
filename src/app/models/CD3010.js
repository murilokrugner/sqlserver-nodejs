/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CD3010', {
    CD3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD3_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD3_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD3_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD3_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CD3_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD3_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD3_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CD3_TPCLAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD3_CLASCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD3_VLTERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD3_TPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD3_RECEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD3_LOJARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD3_VOL115: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CD3_CHV115: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
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
    CD3_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CD3010'
  });
};
