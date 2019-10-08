/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFX010', {
    AFX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFX_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFX_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFX_EDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFX_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFX_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFX_ESTRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_DOCUME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_GERSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_GERSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_GEROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_GERCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_GEREMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_CONFIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_REQUIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_DESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_RECEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_NFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_MOVBAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_PREREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFX_APRPRE: {
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
    AFX_GRPUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'AFX010'
  });
};
