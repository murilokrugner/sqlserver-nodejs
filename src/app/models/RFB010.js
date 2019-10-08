/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RFB010', {
    RFB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RFB_ORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RFB_RELOGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RFB_NUMREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    RFB_DTHRLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RFB_DTHRLF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RFB_ARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RFB_TIPARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RFB_DTHRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RFB_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RFB_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RFB_IDORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    }
  }, {
    tableName: 'RFB010'
  });
};
