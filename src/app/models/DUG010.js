/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DUG010', {
    DUG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUG_REGTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUG_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUG_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUG_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUG_CODPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUG_ESTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUG_ESTDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUG_ESTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUG_CODMSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUG_SATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUG_CONSIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUG_TIPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUG_ESTDNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    DUG_ESTVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'DUG010'
  });
};
