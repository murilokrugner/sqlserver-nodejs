/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKY010', {
    QKY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKY_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKY_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKY_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKY_NQST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKY_REQDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKY_RESCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QKY_RESFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QKY_COMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QKY_APRPDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKY_RESP1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKY_CIACD1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKY_RESP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKY_CIACD2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKY_RESP3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKY_CIACD3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKY_FILRES: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'QKY010'
  });
};
