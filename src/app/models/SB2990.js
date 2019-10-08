/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SB2990', {
    B2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B2_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B2_QFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B2_QATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VATU1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VATU2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VATU3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VATU4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VATU5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEMPN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_USAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B2_RESERVA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QPEDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B2_NAOCLAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_SALPEDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_DINVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B2_DINVFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B2_QTNP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QNPT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QTER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QFIM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QACLASS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_DTINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B2_CMFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIMFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIMFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIMFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIMFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFIMFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEMPSA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEMPPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_SALPPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEMPN2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_RESERV2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QPEDVE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEPRE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QFIMFF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_SALPED2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEMPPRJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_QEMPPR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B2_CMFIM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMFIM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMFIM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMFIM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMFIM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B2_CMRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMRP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFRP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_CMRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    B2_VFRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'SB2990'
  });
};
