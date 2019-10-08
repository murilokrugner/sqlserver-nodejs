/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDG010', {
    CDG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDG_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDG_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDG_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDG_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDG_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDG_IFCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDG_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CDG_TPPROC: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDG_CANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDG_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDG_ITPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDG_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CDG_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'CDG010'
  });
};
